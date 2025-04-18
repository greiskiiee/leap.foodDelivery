import React from "react";
interface FoodItemProps {
  foodName: string;
  price: number;
  image: string;
  ingredients: string;
}

export const FoodItem = ({
  foodName,
  price,
  image,
  ingredients,
}: FoodItemProps) => {
  return (
    <div className="w-[400px] h-[342px] p-4 flex flex-col gap-5 rounded-[20px] bg-[#FFFFFF]">
      <img
        src={image}
        alt={foodName}
        className="w-[365px] h-[210px] rounded-[10px]"
      />

      {/* food description */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-[24px] font-[600] text-[#EF4444] inter">
            {foodName}
          </p>
          <p className="text-[18px] font-[600] text-[#09090B] inter">
            ${price}
          </p>
        </div>

        <div>
          <p className="text-[14px] font-[400] text-[#09090B] inter">
            {ingredients}
          </p>
        </div>
      </div>
    </div>
  );
};
