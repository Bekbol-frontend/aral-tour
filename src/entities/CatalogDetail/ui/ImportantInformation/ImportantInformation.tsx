"use client";
import { Title } from "@/shared/ui/Title";
import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { classBlock } from "../../classBlock";

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
      <Title className="mb-10">Важная информация</Title>

      <div dangerouslySetInnerHTML={{ __html: sanitized }} />
    </div>
  );
}

export default ImportantInformation;
