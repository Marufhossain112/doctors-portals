import express from "express";
import { specializationController } from "./specialization.controller";
const router = express.Router();
router.post("/create-specialization", specializationController.createSpecialization);
router.get("/", specializationController.getSpecializations);
router.get("/:id", specializationController.getSpecialization);
router.patch("/:id", specializationController.updateSpecialization);
export const specializationRoutes = router;