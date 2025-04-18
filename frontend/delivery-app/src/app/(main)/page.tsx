import { BiChevronLeft } from "react-icons/bi";
import { Navigation } from "../../components/Navigation";
import { Footer } from "../../components/Footer";
import { FoodList } from "../../components/FoodList";

export default function Home() {
  return (
    <div>
      <div className="h-[1200px]">
        <FoodList />
      </div>
    </div>
  );
}
