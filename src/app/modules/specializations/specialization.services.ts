import { Specialization } from "@prisma/client";
import prisma from "../../shared/prisma";

const createSpecialization = async (data: Specialization): Promise<Specialization> => {
    const result = await prisma.specialization.create({
        data
    });
    return result;
};
const getSpecializations = async (): Promise<Specialization[] | null> => {
    const result = await prisma.specialization.findMany();
    return result;
};
const getSpecialization = async (id: string): Promise<Specialization | null> => {
    const result = await prisma.specialization.findUnique({
        where: {
            id
        }
    });
    return result;
};
export const specializationService = { createSpecialization, getSpecializations, getSpecialization };