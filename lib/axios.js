import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://103.180.245.115:4000/api",
});
