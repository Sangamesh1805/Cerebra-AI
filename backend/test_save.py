import torch
from pathlib import Path

from model.preprocess import preprocess
from model.predictor import load_model
from model.inference import predict
from model.save_prediction import save_prediction

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

image = preprocess("uploads")

model = load_model(device)

prediction = predict(model, image, device)

reference = Path("uploads")

for file in reference.iterdir():
    if "t1" in file.name.lower() and "t1ce" not in file.name.lower():
        reference_file = file
        break

output = save_prediction(
    prediction,
    reference_file,
    "outputs/prediction.nii.gz",
)

print("Saved to:", output)
