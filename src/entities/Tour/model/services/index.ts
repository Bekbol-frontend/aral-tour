import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ITour } from "../types";

export const getTourTopRated = async () => {
  const API = await getServerClient();

  return await API.get<IData<ITour[]>>("api/tours/top-rated");
};
