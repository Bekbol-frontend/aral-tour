import { CatalogDetail, ICatalogDetail } from "@/entities/CatalogDetail";
import { getServerClient } from "@/shared/api";
import { env } from "@/shared/config/env";
import { webUrl } from "@/shared/constants/web.url";
import { IData } from "@/shared/types/data";
import { EmptyData } from "@/shared/ui/EmptyData";
import { Metadata } from "next";
import Script from "next/script";

interface IProps {
  params: Promise<{ slug: string; locale: string }>;
}

const getCatalogDetail = async (slug: string) => {
  const API = await getServerClient();
  return await API.get<IData<ICatalogDetail>>(`api/tours/${slug}`);
};

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug, locale } = await params;

  const res = await getCatalogDetail(slug);
  const { title, description, main_image } = res.data.data;

  return {
    title: `${res.data.data.title} – Aral Sea Tour | Nukus Moynaq tour | Toqtarbay tour`,
    description,

    alternates: {
      canonical: `${webUrl}/${locale}/catalog/${slug}`,
    },

    openGraph: {
      title,
      description,
      url: `${webUrl}/${locale}/catalog/${slug}`,
      type: "article",
      locale,
      images: [
        {
          url: `${env.baseUrl}${main_image}`,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: `${env.baseUrl}${main_image}`,
        },
      ],
    },
  };
}

async function CatalogDetailPage({ params }: IProps) {
  const { slug } = await params;
  const res = await getCatalogDetail(slug);

  if (!res.data.data) {
    return <EmptyData />;
  }

  return (
    <>
      <CatalogDetail data={res.data.data} />
      <Script
        id="tour-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: res.data.data.title,
            description: res.data.data.description,
            image: `${env.baseUrl}${res.data.data.main_image}`,
            offers: {
              "@type": "Offer",
              price: res.data.data.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  );
}

export default CatalogDetailPage;
