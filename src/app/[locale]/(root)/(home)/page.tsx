import { HeroSlides } from "@/entities/HeroSlides";
import { Tour } from "@/entities/Tour";

async function HomePage() {
  return (
    <>
      <HeroSlides />
      <Tour />
    </>
  );
}

export default HomePage;
