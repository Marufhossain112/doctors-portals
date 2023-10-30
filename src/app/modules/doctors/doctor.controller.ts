import { Request, Response } from "express";
import { doctorService } from "./doctor.services";
const createDoctor = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await doctorService.createDoctor(data);
        res.status(200).json({
            status: 200,
            message: "Doctor created successfully.",
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
export const doctorController = { createDoctor };