import { langs } from "@/shared/types/lang";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: langs,

  defaultLocale: "en",
});
