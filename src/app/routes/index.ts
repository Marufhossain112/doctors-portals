/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { specializationRoutes } from '../modules/specializations/specialization.routes';
import { doctorRoutes } from '../modules/doctors/doctor.routes';

const router = express.Router();

const moduleRoutes: any[] = [
    {
        path: "/specializations", route: specializationRoutes,
    }, {
        path: "/doctors", route: doctorRoutes
    }
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
