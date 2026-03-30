// src/services/api.ts
import axios from "axios";

export const sendEvent = (data: any) => {
  return axios.post("http://localhost:5000/event", data);
};