from pathlib import Path
import shutil
import torch
import time

from fastapi import APIRouter, File, UploadFile, HTTPException
from fastapi.responses import FileResponse

from model.preprocess import preprocess
from model.predictor import load_model
from model.inference import predict
from model.save_prediction import save_prediction

from app.utils.save_original import save_original

router = APIRouter()

UPLOAD_DIR = Path("uploads")
OUTPUT_DIR = Path("outputs")

UPLOAD_DIR.mkdir(exist_ok=True)
OUTPUT_DIR.mkdir(exist_ok=True)


@router.post("/predict")
async def predict_endpoint(
    t1: UploadFile = File(...),
    t1ce: UploadFile = File(...),
    t2: UploadFile = File(...),
    flair: UploadFile = File(...),
):
    try:

        files = {
            t1.filename: t1,
            t1ce.filename: t1ce,
            t2.filename: t2,
            flair.filename: flair,
        }

        saved_files = {}

        # Save uploaded MRI files
        for filename, uploaded_file in files.items():

            file_path = UPLOAD_DIR / filename

            with open(file_path, "wb") as buffer:
                shutil.copyfileobj(uploaded_file.file, buffer)

            saved_files[filename] = str(file_path)

        # Preprocess
        image = preprocess(str(UPLOAD_DIR))

        # Load model
        device = torch.device(
            "cuda" if torch.cuda.is_available() else "cpu"
        )

        model = load_model(device)

        # Run inference
        start_time = time.perf_counter()

        prediction = predict(model, image, device)

        # Calculate tumor statistics
        tumor_voxel_count = int(torch.count_nonzero(prediction).item())
        tumor_detected = tumor_voxel_count > 0

        # Count each tumor region
        necrotic_voxels = int(torch.sum(prediction == 1).item())
        edema_voxels = int(torch.sum(prediction == 2).item())
        enhancing_voxels = int(torch.sum(prediction == 3).item())

        end_time = time.perf_counter()

        inference_time = round(end_time - start_time, 2)

        # Find reference T1 image
        reference_file = None

        for file in UPLOAD_DIR.iterdir():
            name = file.name.lower()

            if "t1" in name and "t1ce" not in name:
                reference_file = file
                break

        if reference_file is None:
            raise Exception("Reference T1 image not found.")

        # Save prediction
        prediction_path = OUTPUT_DIR / "prediction.nii.gz"

        save_prediction(
            prediction,
            reference_file,
            prediction_path,
        )

        # Save original MRI (T1)
        original_path = OUTPUT_DIR / "original.nii.gz"

        save_original(
            reference_file,
            original_path,
        )

        return {
            "status": "success",
            "message": "Brain tumor segmentation completed successfully.",

            "prediction_file": prediction_path.name,
            "original_file": original_path.name,

            "uploaded_files": saved_files,
            "inference_time": inference_time,

            "tumor_detected": tumor_detected,
            "tumor_voxel_count": tumor_voxel_count,
            "necrotic_voxels": necrotic_voxels,
            "edema_voxels": edema_voxels,
            "enhancing_voxels": enhancing_voxels,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )


@router.get("/download/{filename}")
async def download_prediction(filename: str):
    file_path = OUTPUT_DIR / filename

    if not file_path.exists():
        raise HTTPException(
            status_code=404,
            detail="Prediction file not found."
        )

    return FileResponse(
        path=file_path,
        filename=filename,
        media_type="application/octet-stream"
    )
