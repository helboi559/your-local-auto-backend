import { Router } from 'express';
import { getAllServices } from '../controllers/service.js';


const serviceRouter = Router();
serviceRouter.get('/all', getAllServices);

export default serviceRouter;