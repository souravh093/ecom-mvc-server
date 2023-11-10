import { Router } from "express";
import ProductRoutes from "./productsRouts.js"
const router = Router();


router.use("/api/products", ProductRoutes)

export default router;


