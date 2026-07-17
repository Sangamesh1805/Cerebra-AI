import torch

from model.predictor import load_model

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

model = load_model(device)

print(model)
print("✅ Model loaded successfully!")
