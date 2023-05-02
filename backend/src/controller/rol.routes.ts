import { Router } from "express";
import { getAllRoles, getRol } from "../service/rol.service";

const router = Router();

router.get("/", (req, res) => getAllRoles(req, res));

router.get("/:id", (req, res) => getRol(req, res));

export default router;