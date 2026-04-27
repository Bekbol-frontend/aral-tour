"use client";

import { useContextContact } from "@/app/provider/ContactProvider";
import { FaTelegram, FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";

function FooterSocial() {
  const { telegram_username, instagram_username, youtube_url, facebook_name } =
    useContextContact();

  return (
    <div className="flex gap-5">
      <a
        href={`https://t.me/${telegram_username}`}
        target="_blank"
        className="btn p-0 text-title-medium w-[42] h-[42] bg-transparent text-white shadow-none border border-gray-250! inline-flex items-center justify-center hover:bg-secondary-400"
      >
        <FaTelegram />
      </a>
      <a
        href={`https://www.instagram.com/${instagram_username}`}
        target="_blank"
        className="btn p-0 text-title-medium w-[42] h-[42] bg-transparent text-white shadow-none border border-gray-250! inline-flex items-center justify-center hover:bg-secondary-400"
      >
        <FaInstagram />
      </a>
      <a
        href={`https://www.youtube.com/${youtube_url}`}
        target="_blank"
        className="btn p-0 text-title-medium w-[42] h-[42] bg-transparent text-white shadow-none border border-gray-250! inline-flex items-center justify-center hover:bg-secondary-400"
      >
        <FaYoutube />
      </a>
      <a
        href={`https://www.facebook.com/${facebook_name}`}
        target="_blank"
        className="btn p-0 text-title-medium w-[42] h-[42] bg-transparent text-white shadow-none border border-gray-250! inline-flex items-center justify-center hover:bg-secondary-400"
      >
        <FaFacebook />
      </a>
    </div>
  );
}

export default FooterSocial;
