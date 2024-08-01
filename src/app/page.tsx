import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { MainProducts } from "app/components/home/MainProducts";
export default function Home() {
  return (
    <main className="py-24 bg-citrine-white">
      <Hero />

      <Description />
      <MainProducts />
    </main>
  );
}
