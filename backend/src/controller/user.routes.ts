import { Router } from "express";
import {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../service/user.service";

const router = Router();

router.get("/", (req, res) => getAllUsers(req, res));

router.get("/:id", (req, res) => getUser(req, res));

router.post("/", (req, res) => createUser(req, res));

router.put("/:id", (req, res) => updateUser(req, res));

router.delete("/:id", (req, res) => deleteUser(req, res));
// Faltan los endpoints de update, delete, create

export default router;
