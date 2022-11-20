import express from "express";
import {
  Controller
} from "../controllers";

const router = express.Router();

router.post("/note", Controller.create);
router.get("/note", Controller.index);
router.put("/note/:id", Controller.update);

export default router;
