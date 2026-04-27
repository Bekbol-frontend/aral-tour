"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface IProps {
  children: React.ReactNode;
}

export default function Portal({ children }: IProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted ? createPortal(children, document.body) : null;
}
