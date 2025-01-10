import express from "express";
import cors from 'cors';

const app = express();
app.use(cors());
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("successfully sent a request to the backend! ");
});

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
