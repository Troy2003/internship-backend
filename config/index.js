import dotenv from "dotenv";

dotenv.config();

export const { PORT , DEBUG_MODE , MONGO_URL} = process.env;
