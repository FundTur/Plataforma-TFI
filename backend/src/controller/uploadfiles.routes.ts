import { Router } from "express";
import { uploadPost } from "../service/uploadfiles.service";
import { upload } from "../middlewares/uploadfiles.middlewares";

const router = Router();
router.post("/",upload, uploadPost);

export default router; 