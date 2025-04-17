import { CategoryModel } from "../model/category.js";

export const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await CategoryModel({
      categoryName: categoryName,
    });
    return res.send({ success: true, category: category }).end();
  } catch (error) {
    console.error(error);
    return res.send({ success: false, error: error }).end();
  }
};
