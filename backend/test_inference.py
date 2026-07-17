import torch

from model.preprocess import preprocess
from model.predictor import load_model
from model.inference import predict

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

image = preprocess("uploads")

model = load_model(device)

prediction = predict(model, image, device)

print("Prediction shape:", prediction.shape)
print("Unique labels:", torch.unique(prediction))
