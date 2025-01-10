import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send();
  });

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
