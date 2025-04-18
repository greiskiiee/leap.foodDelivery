import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
