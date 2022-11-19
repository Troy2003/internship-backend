import express from "express";
import {
  registerController,
  loginController,
  userController,
} from "../controllers";

const router = express.Router();

router.post("/register", registerController.create);
router.post("/login", loginController.login);

export default router;
