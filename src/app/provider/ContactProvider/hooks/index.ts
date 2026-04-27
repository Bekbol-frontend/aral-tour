import { useContext } from "react";
import { ContactContext } from "../config";
import { IContact } from "@/shared/types/contact";

export const useContextContact = (): IContact => {
  return useContext(ContactContext);
};
