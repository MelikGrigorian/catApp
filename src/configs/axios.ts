import axios from "axios";
import { BASE_URL, API_KEY } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-api-key": API_KEY,
    "Content-Type": "application/json",
  },
});

export default instance;
