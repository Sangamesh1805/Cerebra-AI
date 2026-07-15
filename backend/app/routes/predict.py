from pathlib import Path
import shutil

from fastapi import APIRouter, File, UploadFile

router = APIRouter()

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)


@router.post("/predict")
async def predict(
    t1: UploadFile = File(...),
    t1ce: UploadFile = File(...),
    t2: UploadFile = File(...),
    flair: UploadFile = File(...),
):
    files = {
        t1.filename: t1,
        t1ce.filename: t1ce,
        t2.filename: t2,
        flair.filename: flair,
    }

    saved_files = {}

    for filename, uploaded_file in files.items():
        file_path = UPLOAD_DIR / filename

        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(uploaded_file.file, buffer)

        saved_files[filename] = str(file_path)

    return {
        "status": "success",
        "message": "MRI files uploaded successfully.",
        "files": saved_files,
    }
