import express from "express";
import {
  createUser,
  deleteUserById,
  getUserById,
  getUsers,
} from "../controller/user.js";

export const userRouter = express.Router();

userRouter
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:_id", getUserById)
  .delete("/:_id", deleteUserById);
