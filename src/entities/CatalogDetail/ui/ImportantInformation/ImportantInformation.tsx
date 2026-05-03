"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { classBlock } from "../../model/classBlock";
import { Heading } from "@/shared/ui/Heading";
import { useTranslations } from "next-intl";

interface IProps {
  importantInfo: string;
}

function ImportantInformation({ importantInfo }: IProps) {
  const [sanitized, setSanitized] = useState("");

  const t = useTranslations("TourCard");

  useEffect(() => {
    setSanitized(DOMPurify.sanitize(importantInfo));
  }, [importantInfo]);

  return (
    <div className={classBlock}>
      <Heading variyant="medium" className="mb-15">
        {t("Important information")}
      </Heading>

      <div dangerouslySetInnerHTML={{ __html: sanitized }} />
    </div>
  );
}

export default ImportantInformation;
