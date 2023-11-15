import axios, { AxiosError, CanceledError } from "axios";

export { AxiosError, CanceledError };

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "679aed9b0b3c4f8e9a8f6c12182d220c",
  },
});
