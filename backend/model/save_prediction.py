import nibabel as nib
import numpy as np
from pathlib import Path


def save_prediction(prediction, reference_path, output_path):
    """
    Save predicted segmentation as a NIfTI image using
    the affine and header from a reference MRI.
    """

    reference = nib.load(reference_path)

    prediction = prediction.cpu().numpy().astype(np.uint8)

    pred_img = nib.Nifti1Image(
        prediction,
        affine=reference.affine,
        header=reference.header,
    )

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    nib.save(pred_img, str(output_path))

    return str(output_path)
