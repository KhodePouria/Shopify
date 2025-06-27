import Image from "next/image";
import First from "./components/bodyfirst";
import ProductShowcase from "./components/bodysec";

export default function Home() {
  return (
    <main>
      <First />
      <ProductShowcase />
    </main>
  );
}
