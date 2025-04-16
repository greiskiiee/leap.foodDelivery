import { v4 as uuidv4 } from "uuid";
import { UserModel } from "../model/user.js";

let users = [];

export const createUser = async (req, res) => {
  const { email, password, phoneNumber, address, isVerified } = req.body;
  try {
    users.map((user) => {
      if (user.email === email) {
        return res
          .send({
            success: false,
            message: "email already taken",
          })
          .end();
      }
    });
    const user = await UserModel.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      address: address,
      isVerified: isVerified,
    });
    users.push(user);

    return res.status(200).send({ success: true, user: user }).end();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, message: error }).end();
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).send({ success: true, users: users }).end();
  } catch (err) {
    console.error(err);
    return res.status(400).send({ success: false, message: error }).end();
  }
};

export const getUserById = async (req, res) => {
  const id = req.params;
  try {
    const user = await UserModel.findById(id);
    return res.status(200).send({ success: true, user: user }).end();
  } catch (error) {
    return res.status(400).send({ success: false, message: error }).end();
  }
};
