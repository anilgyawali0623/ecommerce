import { Router } from "express";
import { test } from "../controllers/product.controllers.js";
const router = Router();
router.get("/:collectionType", test);
export default router;
