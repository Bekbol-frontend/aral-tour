import { About } from "@/entities/About";
import { Contact } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { HeroSlides } from "@/entities/HeroSlides";
import { Review } from "@/entities/Review";
import { Tour } from "@/entities/Tour";
import { getLocale, getTranslations } from "next-intl/server";
import Script from "next/script";

async function HomePage() {
  const t = await getTranslations("SEO");
  const locale = await getLocale();

  return (
    <>
      <HeroSlides />
      <Tour />
      <About />
      <Review />
      <FAQ />
      <Contact />

      <Script
        id="ld-json"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "@id": `https://www.aralseatour.uz/${locale}#travel-agency`,
            name: "Aral Sea Tour",
            url: `https://www.aralseatour.uz/${locale}`,
            logo: "https://www.aralseatour.uz/logo.png",
            description: t("description"),
            inLanguage: locale,
            address: {
              "@type": "PostalAddress",
              addressCountry: "UZ",
            },
            areaServed: {
              "@type": "Place",
              name: t("area"),
            },
          }),
        }}
      />
    </>
  );
}

export default HomePage;
