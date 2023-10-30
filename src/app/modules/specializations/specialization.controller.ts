import { Request, Response } from "express";
import { specializationService } from "./specialization.services";

const createSpecialization = async (req: Request, res: Response) => {
    try {
        const { ...data } = req.body;
        const result = await specializationService.createSpecialization(data);
        res.status(200).json({
            status: 200,
            message: "Specialization created successfully.",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: "Something went wrong",
            error
        });
    }
};
const getSpecializations = async (req: Request, res: Response) => {
    try {
        const result = await specializationService.getSpecializations();
        res.status(200).json({
            status: 200,
            message: "Specialization fetched successfully.",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: "Something went wrong",
            error
        });
    }
};
const getSpecialization = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await specializationService.getSpecialization(id);
        res.status(200).json({
            status: 200,
            message: "Single Specialization fetched successfully.",
            data: result
        });
    } catch (error) {
        res.status(400).json({
            status: 'error',
            message: "Something went wrong",
            error
        });
    }
};
export const specializationController = { createSpecialization, getSpecializations, getSpecialization };