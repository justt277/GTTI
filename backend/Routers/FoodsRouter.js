import express from "express";
import { createFood, getFoods, updateFood, deleteFood } from "../Controllers/FoodsController.js";

const FoodRouter = express.Router();

FoodRouter.post('/Add', createFood);
FoodRouter.get('/Get', getFoods);
FoodRouter.patch(`/Patch/:_id`, updateFood)
FoodRouter.put(`/Update/:_id`, updateFood)
FoodRouter.delete(`/Delete/:_id`, deleteFood)

export default FoodRouter;