import { AppError } from "@utils/AppError";
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.2.193:3333",
  timeout: 6000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.data) {
      return Promise.reject(new AppError(error.response.data.message));
    } else {
      return Promise.reject(
        new AppError("Não foi possível conectar ao servidor.")
      );
    }
  }
);

export default api;
