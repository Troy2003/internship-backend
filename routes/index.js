import express from "express";
import {
  registerController,
  loginController,
  userController,
} from "../controllers";

const router = express.Router();

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.post("/me", userController.me);

export default router;
