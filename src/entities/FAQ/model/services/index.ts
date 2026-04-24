import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { IFAQ } from "../types";

export const getFAQ = async () => {
  const API = await getServerClient();

  return await API.get<IData<IFAQ[]>>("api/faq");
};
