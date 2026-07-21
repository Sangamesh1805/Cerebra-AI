from pathlib import Path
import shutil


def save_original(reference_path, output_path):
    """
    Copy the original MRI to the outputs folder.
    """

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    shutil.copy(reference_path, output_path)

    return str(output_path)
