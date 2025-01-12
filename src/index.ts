import express from "express";
import cors from "cors";
import { tmdbRouter } from "./controllers/tmdbController";

const app = express();

app.use(cors());
const PORT = 3000;

app.use(express.json());

app.get("/", tmdbRouter);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
