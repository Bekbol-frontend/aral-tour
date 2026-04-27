import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { ICategory } from "../types";
import { ITour } from "@/entities/Tour";

export const getCategories = async () => {
  const API = await getServerClient();

  return await API.get<IData<ICategory[]>>("api/categories");
};

export const getCatalogProducts = async (category?: string | string[]) => {
  const API = await getServerClient();

  return await API.get<IData<ITour[]>>("api/tours", {
    params: {
      category_id: category,
    },
  });
};
