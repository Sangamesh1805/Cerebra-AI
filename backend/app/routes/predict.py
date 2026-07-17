from pathlib import Path
import shutil
import torch

from fastapi import APIRouter, File, UploadFile, HTTPException

from model.preprocess import preprocess
from model.predictor import load_model
from model.inference import predict
from model.save_prediction import save_prediction

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
        prediction = predict(model, image, device)

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
        output_path = OUTPUT_DIR / "prediction.nii.gz"

        save_prediction(
            prediction,
            reference_file,
            output_path,
        )

        return {
            "status": "success",
            "message": "Brain tumor segmentation completed successfully.",
            "prediction_file": str(output_path),
            "uploaded_files": saved_files,
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )
