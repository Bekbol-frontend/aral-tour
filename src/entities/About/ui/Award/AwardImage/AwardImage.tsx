"use client";

import { env } from "@/shared/config/env";
import Image from "next/image";

interface IProps {
  imgUrl: string;
  openModal: (url: string) => void;
}

function AwardImage({ imgUrl, openModal }: IProps) {
  return (
    <>
      <div
        className="break-inside-avoid border-[1] border-secondary-350 bg-secondary-300 cursor-pointer group"
        onClick={() => openModal(imgUrl)}
      >
        <Image
          src={`${env.baseUrl}${imgUrl}`}
          alt="Award-image"
          width={400}
          height={400}
          className="w-full h-auto object-contain group-hover:scale-[.95] transition-all duration-500"
        />
      </div>
    </>
  );
}

export default AwardImage;
