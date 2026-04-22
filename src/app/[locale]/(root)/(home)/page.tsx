import { About } from "@/entities/About";
import { HeroSlides } from "@/entities/HeroSlides";
import { Tour } from "@/entities/Tour";

async function HomePage() {
  return (
    <>
      <HeroSlides />
      <Tour />
      <About />
    </>
  );
}

export default HomePage;
