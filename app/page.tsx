import { HeroSection } from "./components/home/HeroSection";
import { ProductsSection } from "./components/home/ProductsSection";
import { PatientsSection } from "./components/home/PatientsSection";
import { CliniciansSection } from "./components/home/CliniciansSection";
import { AboutUsSection } from "./components/home/AboutUsSection";
import { NewsSection } from "./components/home/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ProductsSection />
      <PatientsSection />
      <CliniciansSection />
      <NewsSection />
    </>
  );
}
