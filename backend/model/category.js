import mongoose from "mongoose";

const catergorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
export const CategoryModel = mongoose.model("Category", catergorySchema);
