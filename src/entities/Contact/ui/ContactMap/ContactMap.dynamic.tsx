"use client";

import dynamic from "next/dynamic";

const ContactMapDynamic = dynamic(() => import("./ContactMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default ContactMapDynamic;
