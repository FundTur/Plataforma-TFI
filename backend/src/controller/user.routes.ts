import { Router } from "express";
import { getAllUsers, getUser } from "../service/user.service";

const router = Router();

router.get("/", (req, res) => getAllUsers(req, res));

router.get("/:id", (req, res) => getUser(req, res));

export default router;
