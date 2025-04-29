import express from "express";
import { UserController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/", authMiddleware, UserController.getUsers);
router.post("/create", authMiddleware, UserController.createUser);
router.post("/update", authMiddleware, UserController.updateUser);

export default router;
