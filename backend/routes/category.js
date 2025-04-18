import express from "express";
import {
  createCategory,
  deleteCategoryById,
  getCategoriees,
} from "../controller/category.js";

export const categoryRouter = express.Router();

categoryRouter
  .post("/", createCategory)
  .get("/", getCategoriees)
  .delete("/:_id", deleteCategoryById);
