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

 //get all customers

 export const getAllCustomers = tryCatch(async (req, res) => {
    //if current user exists
    const customers = await Customer.find({});
    // console.log("customers",customers)
    //get all customers list
    res.status(200).json({
        success: true,
        result: customers
    });

 });

// update customer
export const updateCustomer = tryCatch(async (req, res) => {
    const { custName, custEmail, custPhone, active } = req.body;
    // const { _id } = req.params;
    // console.log(req.params._id)
    const customer = await Customer.findByIdAndUpdate(req.params._id, {
        custName,
        custEmail,
        custPhone,
        active
    });
    
    console.log('customerUdpate', customer)
    res.status(200).json({
        success: true,
        result: customer,
    });
});