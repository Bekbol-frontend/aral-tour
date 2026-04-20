import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { IHeroSlide } from "../types";

export const getHeroSlides = async () => {
  const API = await getServerClient();

  return API.get<IData<IHeroSlide[]>>("api/hero-slides");
};
