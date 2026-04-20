import { EmptyData } from "@/shared/ui/EmptyData";
import { getHeroSlides } from "../model/services";
import HeroSwiper from "./HeroSwiper/HeroSwiper";

async function HeroSlides() {
  const res = await getHeroSlides();

  if (!res.data.data || !res.data.data.length) return <EmptyData />;

  return <HeroSwiper data={res.data.data} />;
}

export default HeroSlides;
