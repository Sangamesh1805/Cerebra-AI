import torch
from pathlib import Path

from model.model import build_model

MODEL_PATH = Path(__file__).parent / "best_model_100patients.pth"

_model = None
_device = None


def load_model(device):
    global _model, _device

    # Return cached model if already loaded
    if _model is not None:
        return _model

    print("Loading AI model...")

    model = build_model(device)

    state_dict = torch.load(
        MODEL_PATH,
        map_location=device,
    )

    model.load_state_dict(state_dict)
    model.eval()

    _model = model
    _device = device

    print("Model loaded successfully.")

    return _model
