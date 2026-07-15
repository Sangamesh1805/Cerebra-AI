import torch
from pathlib import Path

from model.model import build_model


MODEL_PATH = Path(__file__).parent / "best_model_100patients.pth"


def load_model(device):
    model = build_model(device)

    state_dict = torch.load(
        MODEL_PATH,
        map_location=device,
    )

    model.load_state_dict(state_dict)

    model.eval()

    return model
