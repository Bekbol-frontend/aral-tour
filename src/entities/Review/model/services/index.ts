import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { IReview } from "../types";

export const getReviewsAll = async () => {
  const API = await getServerClient();

  return await API.get<IData<IReview[]>>("api/reviews");
};
