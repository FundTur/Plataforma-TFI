import { Router } from "express";
import { createOrder } from "../service/mercadopagopay.service";
const router = Router();

router.get('/create-order', createOrder);
router.get('/success', (req, res) => res.send("order payment success"))
router.get('/webhook', (req, res) => res.send("payment pending"))
export default router

