/* eslint-disable @typescript-eslint/no-explicit-any */
import { Doctor } from "@prisma/client";
import prisma from "../../shared/prisma";
const createDoctor = async (data: Doctor): Promise<Doctor> => {
    const result = await prisma.doctor.create({ data });
    return result;
};
const getDoctors = async (sortBy: string, sortOrder: "asc" | "desc", limit: number, page: number): Promise<Doctor[] | null | any> => {
    const result = await prisma.doctor.findMany({
        include: {
            specialization: true
        },
        take: limit,
        skip: (page - 1) * limit,
        orderBy: {
            [sortBy]: sortOrder
        }
    });
    const total = await prisma.doctor.count();
    return {
        meta: {
            page,
            limit,
            total
        },
        data: result
    };
};
const getDoctor = async (id: string): Promise<Doctor | null> => {
    const result = await prisma.doctor.findUnique({
        where: { id },
        include: {
            specialization: true
        }
    });
    return result;
};
const updateDoctor = async (id: string, paylaod: Partial<Doctor>): Promise<Partial<Doctor>> => {
    const result = await prisma.doctor.update({
        where: {
            id
        }, data: paylaod
    });
    return result;
};
const deleteDoctor = async (id: string): Promise<Partial<Doctor>> => {
    const result = await prisma.doctor.delete({
        where: {
            id
        }
    });
    return result;
};
export const doctorService = { createDoctor, getDoctors, getDoctor, updateDoctor, deleteDoctor };