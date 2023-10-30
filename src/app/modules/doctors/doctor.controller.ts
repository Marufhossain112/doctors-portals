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
const getDoctors = async (req: Request, res: Response) => {
    try {
        const { limit = 1, page = 1 } = req.query;
        // console.log(req.query);
        const result = await doctorService.getDoctors(Number(limit), Number(page));
        res.status(200).json({
            status: 200,
            message: "Doctors fetched successfully.",
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
const getDoctor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await doctorService.getDoctor(id);
        res.status(200).json({
            status: 200,
            message: "Single Doctor fetched successfully.",
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
const updateDoctor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await doctorService.updateDoctor(id, data);
        res.status(200).json({
            status: 200,
            message: " Doctor updated successfully.",
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
const deleteDoctor = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await doctorService.deleteDoctor(id);
        res.status(200).json({
            status: 200,
            message: " Doctor deleted successfully.",
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
export const doctorController = { createDoctor, getDoctors, getDoctor, updateDoctor, deleteDoctor };