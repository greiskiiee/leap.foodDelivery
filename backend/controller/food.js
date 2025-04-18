import { FoodModel } from "../model/food.js";

export const createFood = async (req, res) => {
  try {
    const food = await FoodModel.create(req.body);
    return res.status(200).send({ success: true, food: food }).end();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, error: error }).end();
  }
};

export const getFoods = async (_, res) => {
  try {
    const foods = await FoodModel.find();
    return res.status(200).send({ success: true, foods: foods }).end();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, error: error }).end();
  }
};

export const deleteFoodById = async (req, res) => {
  const id = req.params;
  try {
    const food = await FoodModel.deleteOne(id);
    return res
      .status(200)
      .send({ success: true, message: "food deleted" })
      .end();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, error: error }).end();
  }
};

export const getFoodsByCategory = async (req, res) => {
  const { categoryId } = req.params;
  try {
    const foods = await FoodModel.find({ categoryId: categoryId });
    return res.status(200).send({ success: true, foods: foods }).end();
  } catch (error) {
    console.error("error", error);
    return res.status(400).send({ success: false, error: error }).end();
  }
};
