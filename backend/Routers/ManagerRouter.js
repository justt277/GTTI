import { register, login } from "../Controllers/ManagerController.js";
import express from "express";

const ManagerRouter = express.Router();

ManagerRouter.post('/register', register);
ManagerRouter.post('/login', login);

export default ManagerRouter;