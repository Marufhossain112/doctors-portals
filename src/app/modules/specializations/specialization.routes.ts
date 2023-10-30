import express from "express";
import { specializationController } from "./specialization.controller";
const router = express.Router();
router.post("/create-specialization", specializationController.createSpecialization);
router.get("/", specializationController.getSpecializations);
router.get("/:id", specializationController.getSpecialization);
export const specializationRoutes = router;