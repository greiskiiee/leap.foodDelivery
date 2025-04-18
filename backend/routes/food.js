import express from "express";
import {
  createFood,
  deleteFoodById,
  getFoods,
  getFoodsByCategory,
} from "../controller/food.js";

export const foodRouter = express.Router();

foodRouter
  .post("/", createFood)
  .get("/", getFoods)
  .delete("/:_id", deleteFoodById)
  .get("/:categoryId", getFoodsByCategory);
