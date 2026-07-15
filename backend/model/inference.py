import torch
from monai.inferers import sliding_window_inference


def predict(model, image, device):
    """
    Runs inference on a preprocessed MRI volume.

    Args:
        model: Loaded MONAI UNet model
        image: Preprocessed tensor (C, D, H, W)
        device: torch.device

    Returns:
        prediction: 3D segmentation tensor
    """

    model.eval()

    with torch.no_grad():

        image = image.unsqueeze(0).to(device)

        output = sliding_window_inference(
            image,
            roi_size=(128, 128, 128),
            sw_batch_size=1,
            predictor=model,
        )

        prediction = torch.argmax(output, dim=1)

    return prediction.squeeze(0).cpu()
