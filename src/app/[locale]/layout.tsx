import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";

import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import NextTopLoader from "nextjs-toploader";

import "../styles/globals.css";
import { ContactProvider } from "../provider/ContactProvider";
import { getContact } from "@/shared/lib/api/get-contact";
import { NetworkStatus } from "@/shared/ui/NetworkStatus";
import { Toaster } from "react-hot-toast";
import { getLocale, getTranslations } from "next-intl/server";
import { webUrl } from "@/shared/constants/web.url";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#f6e56b",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("SEO");
  const locale = await getLocale();

  return {
    metadataBase: new URL(webUrl),

    title: {
      default: t("title"),
      template: `%s | Aral Sea Tour | Moynaq tour | Nukus & Moynaq tour | Aralseatour`,
    },

    description: t("description"),
    keywords: t.raw("keywords"),

    alternates: {
      canonical: `${webUrl}/${locale}`,
      languages: {
        en: `${webUrl}/en`,
        ru: `${webUrl}/ru`,
        uz: `${webUrl}/uz`,
        kk: `${webUrl}/kk`,
      },
    },

    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${webUrl}/${locale}`,
      siteName: "Aral Sea Tour",
      locale,
      type: "website",
      images: [
        {
          url: `${webUrl}/logo.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: [`${webUrl}/logo.jpg`],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;
  const contactResponse = await getContact();

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={nunito.variable} data-theme="cupcake">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body>
        <NextTopLoader
          color="#2be5eb"
          height={4}
          shadow="0 0 10px #11b2b8, 0 0 5px #031b1c"
        />
        <NextIntlClientProvider>
          <NetworkStatus />
          <ContactProvider data={contactResponse.data.data}>
            <div id="main">
              <Header />
              <main id="main-block">{children}</main>
              <Footer />
            </div>

            <Toaster />
          </ContactProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
