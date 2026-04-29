"use client";
import { MdOnlinePrediction } from "react-icons/md";

import { useEffect, useState } from "react";
import { Title } from "../../Title";
import { Description } from "../../Description";
import { useTranslations } from "next-intl";

export default function NetworkStatus() {
  const [isOffline, setIsOffline] = useState(false);

  const t = useTranslations("NetworkStatus");

  useEffect(() => {
    const goOnline = () => setIsOffline(false);
    const goOffline = () => setIsOffline(true);

    setIsOffline(!navigator.onLine);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <div className="fixed inset-0 z-50 bg-secondary-500/95 backdrop-blur-md flex items-center justify-center p-6">
      <div className="max-w-md rounded-3xl bg-base-white shadow-2xl p-8 text-center">
        <div className="text-4xl md:text-6xl mb-6 animate-pulse flex items-center justify-center">
          <MdOnlinePrediction />
        </div>

        <Title variyant="medium" className="text-secondary-300 mb-3">
          {t("No Internet")}
        </Title>

        <Description className="text-gray-150 mb-6">
          {t(
            "Network disconnected The page will continue to run once the connection is restored is",
          )}
        </Description>

        <button
          onClick={() => window.location.reload()}
          className="btn bg-primary-300 text-secondary-350"
        >
          {t("Retry")}
        </button>
      </div>
    </div>
  );
}
