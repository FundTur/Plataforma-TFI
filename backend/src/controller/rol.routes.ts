import { Router } from "express";
import {
  getAllRoles,
  getRol,
  createRol,
  updateRol,
  deleteRol,
} from "../service/rol.service";

const router = Router();

router.get("/", (req, res) => getAllRoles(req, res));

router.get("/:id", (req, res) => getRol(req, res));

router.post("/", (req, res) => createRol(req, res));

router.put("/:id", (req, res) => updateRol(req, res));

router.delete("/:id", (req, res) => deleteRol(req, res));

// Faltan los endpoints de update, delete, create

export default router;
