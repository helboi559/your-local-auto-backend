import { Router } from "express";
import { createCustomer, getAllCustomers,updateCustomer } from "../controllers/customer.js";

// import auth from "../middleware/auth.js";
const customerRouter = Router();
customerRouter.post("/create", createCustomer);
customerRouter.get("/all", getAllCustomers);
customerRouter.patch("/update-customer/:_id", updateCustomer);

export default customerRouter;