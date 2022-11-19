import express from "express";
import { PORT } from "./config";

const port = PORT || 3000;

const app = express();

app.listen(port, () =>
  console.log(`server started on http://127.0.0.1:${port}`)
);
