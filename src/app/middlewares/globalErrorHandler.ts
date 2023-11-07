import { Prisma } from "@prisma/client";
import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";
import config from "../../config";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    // throw new Error("I am error.");
    let statusCode = httpStatus.BAD_REQUEST;
    let message = config.env === "development" ? err.message : "Something went wrong";
    if (config.env === "development") {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            statusCode = 400;
            const lines = err.message.trim().split("\n");
            const finalMessage = lines[lines.length - 1];
            message = finalMessage;
        }
        else if (err instanceof Prisma.PrismaClientValidationError) {
            statusCode = 400;
            const lines = err.message.trim().split("\n");
            const finalMessage = lines[lines.length - 1];
            message = finalMessage;
            // console.log(lines.length)
            // console.log(err.message);
            // console.log(finalMessage)
        }
        else if (err instanceof Error) {
            statusCode = httpStatus.BAD_REQUEST;
            message = err.message;
        }
    }
    res.status(statusCode).json({
        errorName: err.name,
        success: false,
        message: message,
        errorStack: err.stack
    });
};