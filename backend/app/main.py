from fastapi import FastAPI
from app.routes.predict import router as predict_router

app = FastAPI(
    title="Cerebra API",
    version="1.0.0",
    description="AI-powered Brain Tumor Segmentation API",
)

app.include_router(predict_router)


@app.get("/")
def root():
    return {"message": "Welcome to Cerebra API 🚀"}
