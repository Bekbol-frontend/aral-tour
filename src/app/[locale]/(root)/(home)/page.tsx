import { About } from "@/entities/About";
import { Contact } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
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
      <FAQ />
      <Contact />
    </>
  );
}

export default HomePage;
