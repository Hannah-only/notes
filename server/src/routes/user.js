import express from "express";
// import * as UserController from '../controller/user.js' or use the below way
import { signup, login, getAuthUser } from "../controller/user.js";
import { verifyToken } from "../middleware/verifyAuth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/", verifyToken, getAuthUser);
export default router;
