import { getServerClient } from "@/shared/api";
import { IContact } from "@/shared/types/contact";
import { IData } from "@/shared/types/data";

export async function getContact() {
  const API = await getServerClient();

  return await API.get<IData<IContact>>("/api/contact");
}
