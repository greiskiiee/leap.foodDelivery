import { CategoryModel } from "../model/category.js";

export const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await CategoryModel.create({
      categoryName: categoryName,
    });
    return res.status(200).send({ success: true, category: category }).end();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, error: error }).end();
  }
};

export const getCategoriees = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    return res
      .status(200)
      .send({ success: true, categories: categories })
      .end();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, error: error }).end();
  }
};

export const deleteCategoryById = async (req, res) => {
  const id = req.params;
  try {
    await CategoryModel.deleteOne(id);
    return res
      .status(200)
      .send({ success: true, message: "category deleted" })
      .end();
  } catch (error) {
    console.error(error);
    return res.status(400).send({ success: false, error: error }).end();
  }
};
