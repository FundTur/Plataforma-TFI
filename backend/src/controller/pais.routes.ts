import { Router } from "express";
import { getAllPaises, getPais,createPais,updatePais,deletePais} from "../service/pais.service";

const router = Router();

router.get("/", (req, res) => getAllPaises(req, res));

router.get("/:id", (req, res) => getPais(req, res));

router.post("/", (req, res) => createPais(req, res));

router.put("/:id", (req, res) => updatePais(req, res));

router.delete("/:id", (req, res) => deletePais(req, res));
// Faltan los endpoints de update, delete, create

export default router;