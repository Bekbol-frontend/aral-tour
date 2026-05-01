"use client";

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { classBlock } from "../../classBlock";
import { Heading } from "@/shared/ui/Heading";

interface IProps {
  importantInfo: string;
}

function ImportantInformation({ importantInfo }: IProps) {
  const [sanitized, setSanitized] = useState("");

  useEffect(() => {
    setSanitized(DOMPurify.sanitize(importantInfo));
  }, [importantInfo]);

  return (
    <div className={classBlock}>
      <Heading variyant="medium" className="mb-15">
        Важная информация
      </Heading>

      <div dangerouslySetInnerHTML={{ __html: sanitized }} />
    </div>
  );
}

export default ImportantInformation;
