import { Router } from "express";
import { createCustomer } from "../controllers/customer.js";

const customerRouter = Router();
customerRouter.post("/create", createCustomer);

export default customerRouter;