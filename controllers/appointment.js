import Appointment from "../models/Appointment.js";
// import Customer from "../models/Customer.js";
import tryCatch from "./util/tryCatch.js";

export const getAllAppointments = tryCatch(async (req, res) => {
    const appointments = await Appointment.find({});
    console.log("appointmentsNew",appointments)
    res.status(200).json({
        success: true,
        result: appointments
    });
});

export const createAppointment = tryCatch(async (req, res) => {
    const {date, custName, apptEmail,jobDescription, plannedTime, partsCost} = req.body;
    
    const appointment = await Appointment.create({
        date,
        custName, 
        apptEmail,
        jobDescription, 
        plannedTime, 
        partsCost,
    });
    res.status(201).json({
        success: true,
        result: appointment
    });
});