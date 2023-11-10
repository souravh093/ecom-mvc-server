import { Router } from "express";
import {
  createUser,
  deleteData,
  fetchAllData,
  fetchSingleData,
  updateData,
} from "../controller/ProductsController.js";

const router = Router();

router.post("/", createUser);

router.get("/", fetchAllData);

router.get("/:id", fetchSingleData);

router.put("/:id", updateData);

router.delete("/:id", deleteData);

export default router;
