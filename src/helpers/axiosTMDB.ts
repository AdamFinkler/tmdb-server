import axios, { Axios, AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

export const axiosTMDB: AxiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: process.env.API_KEY,
  },
});
