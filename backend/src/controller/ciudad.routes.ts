import { Router } from "express";
import { getAllCiudades, getCiudad } from "../service/ciudad.service";

const router = Router();

router.get("/", (req, res) => getAllCiudades(req, res));

router.get("/:id", (req, res) => getCiudad(req, res));

export default router;