import { Router } from "express";
import { getAllAppointments ,createAppointment} from "../controllers/appointment.js";

const appointmentRouter = Router();
appointmentRouter.get("/all-appointments", getAllAppointments);
appointmentRouter.post("/create-appointment", createAppointment);

export default appointmentRouter;