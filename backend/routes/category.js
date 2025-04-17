import express from "express";
import { createCategory, getCategoriees } from "../controller/category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", createCategory).get("/", getCategoriees);
