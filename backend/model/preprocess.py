from pathlib import Path

from monai.transforms import (
    Compose,
    LoadImaged,
    EnsureChannelFirstd,
    Orientationd,
    NormalizeIntensityd,
    CropForegroundd,
    ResizeWithPadOrCropd,
    EnsureTyped,
)


def find_file(folder: Path, modality: str):
    for file in folder.iterdir():

        if file.suffix not in [".nii", ".gz"]:
            continue

        filename = file.name.lower()

        if modality in filename:
            return str(file)

    raise FileNotFoundError(f"{modality} file not found.")


transform = Compose(
    [
        LoadImaged(keys=["image"]),
        EnsureChannelFirstd(keys="image"),
        Orientationd(keys="image", axcodes="RAS"),
        NormalizeIntensityd(
            keys="image",
            nonzero=True,
            channel_wise=True,
        ),
        CropForegroundd(
            keys="image",
            source_key="image",
        ),
        ResizeWithPadOrCropd(
            keys="image",
            spatial_size=(128, 128, 128),
        ),
        EnsureTyped(keys="image"),
    ]
)


def preprocess(upload_dir):
    upload_dir = Path(upload_dir)

    image_paths = [
        find_file(upload_dir, "t1"),
        find_file(upload_dir, "t1ce"),
        find_file(upload_dir, "t2"),
        find_file(upload_dir, "flair"),
    ]

    data = {
        "image": image_paths,
    }

    data = transform(data)

    return data["image"]
