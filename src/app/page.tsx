import Image from "next/image";
import First from "./components/bodyfirst";
import ProductShowcase from "./components/bodysec";
import Testimonials from "./components/bodythird";
import FeatureSection from "./components/bodyforth";

export default function Home() {
  return (
    <main>
      <First />
      <ProductShowcase />
      <Testimonials />
      <FeatureSection />
    </main>
  );
}
