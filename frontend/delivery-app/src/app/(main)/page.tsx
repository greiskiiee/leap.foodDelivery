"use client";
import { BiChevronLeft } from "react-icons/bi";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { FoodList } from "../../components/FoodList";
import { Category } from "@/components/Category";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const fetchFoods = async () => {
    try {
      const response = await axios
        .get(`${process.env.NEXT_PUBLIC_BACKEND_URI}/food`)
        .then((res) => setFoodData(res.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const [foodData, setFoodData] = useState([]);
  return (
    <div>
      <div className="h-[1200px]">
        <Category />
      </div>
    </div>
  );
}
