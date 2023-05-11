import { Router } from "express";
import { getAllPlanes, getPlanes,createPlan, updatePlan,deletePlan} from "../service/plan.service";

const router = Router();

router.get("/", (req, res) => getAllPlanes(req, res));

router.get("/:id", (req, res) => getPlanes(req, res));

router.post("/", (req, res) => createPlan(req, res));

router.put("/:id", (req, res) => updatePlan(req, res));

router.delete("/:id", (req, res) => deletePlan(req, res));
// Faltan los endpoints de update, delete, create

export default router;
