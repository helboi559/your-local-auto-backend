import tryCatch from "./util/tryCatch.js";
import Customer from "../models/Customer.js";
// import helper try/catch function to avoid repeating

export const createCustomer = tryCatch(async (req, res) => {
    const { custName, custEmail, custPhone } = req.body;
    
    //check if customer already exists
    const emailLowerCase = custEmail.toLowerCase();
    const existedCustomer = await Customer.findOne({ custEmail: emailLowerCase });
    if (existedCustomer) {
        return res.status(400).json({ success: false, message: 'Customer already exists!' });
    }

    const customer = await Customer.create({
        custName,
        custEmail,
        custPhone,
    });
    res.status(201).json({
        success: true,
        result: customer,
    });
 });