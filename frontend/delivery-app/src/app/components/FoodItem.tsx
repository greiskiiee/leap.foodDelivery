import React from "react";
interface FoodItemProps {
  foodName: String;
  price: Number;
  image: Buffer;
  ingredients: String;
}

export const FoodItem = (props: FoodItemProps) => {
  return <div>{props.foodName}</div>;
};
