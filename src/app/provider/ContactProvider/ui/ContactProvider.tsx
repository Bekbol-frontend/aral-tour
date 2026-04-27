"use client";

import { ReactNode } from "react";
import { ContactContext } from "../config";
import { IContact } from "@/shared/types/contact";

interface IProps {
  children: ReactNode;
  data: IContact;
}

function ContactProvider({ children, data }: IProps) {
  return (
    <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
  );
}

export default ContactProvider;
