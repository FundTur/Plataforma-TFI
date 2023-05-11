import { Router } from "express";
import { getAllCiudades, getCiudad, createCiudad,updateCiudad,deleteCiudad } from "../service/ciudad.service";

const router = Router();

router.get("/", (req, res) => getAllCiudades(req, res));

router.get("/:id", (req, res) => getCiudad(req, res));

router.post("/", (req, res) => createCiudad(req, res));

router.put("/:id", (req, res) => updateCiudad(req, res));

router.delete("/:id", (req, res) => deleteCiudad(req, res));
// Faltan los endpoints de update, delete, create

export default router;