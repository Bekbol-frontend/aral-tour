import { About } from "@/entities/About";
import { HeroSlides } from "@/entities/HeroSlides";
import { Review } from "@/entities/Review";
import { Tour } from "@/entities/Tour";

async function HomePage() {
  return (
    <>
      <HeroSlides />
      <Tour />
      <About />
      <Review />
    </>
  );
}

export default HomePage;
