import express from "express";
import { PORT, MONGO_URL } from "./config";
import { errorHandler } from "./middlewares";
import mongoose from "mongoose";
import router from "./routes";
import cors from 'cors';

/*
Develope an API to perform create , update methods
*/

const port = PORT || 3000;

const app = express();

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

//Connection with mongodb
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
  console.log('connected..!');
}


app.listen(port, () =>
  console.log(`server started on http://127.0.0.1:${port}`)
);
