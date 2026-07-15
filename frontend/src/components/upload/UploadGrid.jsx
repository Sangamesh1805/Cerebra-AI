import UploadCard from "./UploadCard";

const modalities = ["T1", "T1CE", "T2", "FLAIR"];

function UploadGrid({ files, setFiles }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
      {modalities.map((modality) => (
        <UploadCard
          key={modality}
          modality={modality}
          files={files}
          setFiles={setFiles}
        />
      ))}
    </div>
  );
}

export default UploadGrid;
