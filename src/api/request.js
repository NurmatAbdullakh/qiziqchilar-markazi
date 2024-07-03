import axios from "axios";

export const request = axios.create({
  baseURL: "https://admin.askiyachilar.uz/api",
});
