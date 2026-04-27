"use client";

import { useContextContact } from "@/app/provider/ContactProvider";
import { Description } from "@/shared/ui/Description";
import { MapPin, Phone, Send } from "lucide-react";

function HeaderContact() {
  const { address, phone, telegram_url, telegram_username } =
    useContextContact();

  return (
    <div className="mt-20 py-20 flex flex-col gap-20">
      <div className="flex items-center gap-10 pb-20 border-b-[1] border-base-border">
        <button className="btn bg-primary-350 text-secondary-300 p-10">
          <MapPin />
        </button>
        <Description>{address}</Description>
      </div>
      <div className="flex items-center gap-10 pb-20 border-b-[1] border-base-border relative">
        <button className="btn bg-secondary-300 text-secondary-150 p-10">
          <Phone />
        </button>
        <Description>{phone}</Description>
        <a href={`tel:${phone}`} className="absolute inset-0" />
      </div>
      <div className="flex items-center gap-10 relative">
        <button className="btn bg-secondary-150 text-secondary-300 p-10">
          <Send />
        </button>
        <Description>{telegram_username}</Description>
        <a
          href={`https://t.me/${telegram_url}`}
          className={`absolute inset-0`}
        />
      </div>
    </div>
  );
}

export default HeaderContact;
