import mongoose, { mongo, Schema } from "mongoose";

const foodOrderItemSchema = new mongoose.Schema({
  foodId: {
    type: Schema.Types.ObjectId,
    ref: "Food",
  },
  quantity: {
    type: Number,
    default: 1,
  },
});
const foodOrderSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  totalPrice: {
    type: Number,
    default: 0.0,
  },
  foodOrderItems: {
    type: [Schema.Types.ObjectId],
    ref: "Foods",
  },
  status: {
    type: String,
    enum: ["PENDING", "CANCELED", "DELIVERED"],
    default: "PENDING",
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

export const foodOrderItemModel = mongoose.model(
  "FoodOrderItem",
  foodOrderItemSchema
);

export const foodOrderModel = mongoose.model("FoodOrder", foodOrderSchema);
