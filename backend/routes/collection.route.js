import { Router } from "express";
import { productInfo} from "../controllers/product.controllers.js";
const router = Router();
router.post("/productInfo", productInfo);
export default router;
