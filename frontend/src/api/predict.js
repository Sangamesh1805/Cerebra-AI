import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function predictTumor(files) {
  const formData = new FormData();

  formData.append("t1", files.T1);
  formData.append("t1ce", files.T1CE);
  formData.append("t2", files.T2);
  formData.append("flair", files.FLAIR);

  const response = await API.post("/predict", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
}
