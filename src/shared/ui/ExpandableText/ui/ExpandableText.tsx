"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

interface Props {
  text: string;
  limit?: number;
}

export default function ExpandableText({ text, limit = 140 }: Props) {
  const [expanded, setExpanded] = useState(false);

  const t = useTranslations("ExpandableText");

  const isLongText = text.length > limit;

  if (!isLongText) {
    return <>{text}</>;
  }

  return (
    <>
      <>{expanded ? text : `${text.slice(0, limit)}...`}</>

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex my-2 text-description-small md:text-description-medium cursor-pointer"
      >
        {expanded ? t("Show less") : t("Show more")}
      </button>
    </>
  );
}
