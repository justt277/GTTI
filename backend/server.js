import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import chalk from "chalk";
import FoodRouter from "./Routers/FoodsRouter.js";
import ImportRouter from "./Routers/ImportRouter.js";
import ExportRouter from "./Routers/ExportRouter.js";
import { register, login } from "./Controllers/ManagerController.js";




dotenv.config();

const app = express();
const port = process.env.PORT || 5050;
const mongo_url = process.env.MONGO_URL ;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(chalk.blueBright(`${req.method} & ${req.url}`));
    next();
})

app.use('/Food', FoodRouter);
app.use('/Import', ImportRouter);
app.use('/Export', ExportRouter);
app.post('/register', register)
app.post('/login', login)


mongoose.connect(mongo_url)
 .then(() => {
    app.listen(port, () => {
        console.log(chalk.whiteBright.bgBlack(`connected successfully on port ${port}`))
    })
 })
 .catch((error) => {
    console.log(chalk.whiteBright.bgRed(`failed to connect on port ${port}`))
 })