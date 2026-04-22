import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { IAboutData } from "../types";

export const getAbout = async () => {
  const API = await getServerClient();
  return await API.get<IData<IAboutData>>("api/about");
};
