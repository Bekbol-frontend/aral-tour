"use client";

import { createContext } from "react";
import { IContact } from "@/shared/types/contact";

export const ContactContext = createContext<IContact>({} as IContact);
