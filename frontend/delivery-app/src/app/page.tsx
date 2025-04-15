import { BiChevronLeft } from "react-icons/bi";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navigation />

      <div className="h-[1200px]"></div>
      <Footer />
    </div>
  );
}
