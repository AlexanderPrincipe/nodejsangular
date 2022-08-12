import { Router } from "express";
import {
  getCustomers,
  createNewCustomer
} from "../controllers/customers.controller";

const router = Router();

router.get("/customers", getCustomers);
router.post("/saveCustomer", createNewCustomer);

export default router;
