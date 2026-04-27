import { Banner } from "@/entities/Banner";
import { Catalog } from "@/entities/Catalog";
import { Contact } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { getServerClient } from "@/shared/api";
import { IBanner } from "@/shared/types/banner";
import { IData } from "@/shared/types/data";

const getCatalogBanner = async () => {
  const API = await getServerClient();

  return await API.get<IData<IBanner>>("api/categories/banner");
};

async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const res = await getCatalogBanner();
  const { category } = await searchParams;

  return (
    <>
      <Banner data={res.data.data} />
      <Catalog category={category}/>
      <FAQ />
      <Contact />
    </>
  );
}

export default CatalogPage;
