import { NextFunction, Response, Request } from "express";
import httpStatus from "http-status";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.FORBIDDEN).json({
        success: "false",
        message: "FORBIDDEN",
        errorMessages: {
            message: err
        }
    });
};