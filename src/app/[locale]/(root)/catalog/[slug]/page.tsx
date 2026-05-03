import { CatalogDetail, ICatalogDetail } from "@/entities/CatalogDetail";
import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { EmptyData } from "@/shared/ui/EmptyData";

const getCatalogDetail = async (slug: string) => {
  const API = await getServerClient();
  return await API.get<IData<ICatalogDetail>>(`api/tours/${slug}`);
};

async function CatalogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const res = await getCatalogDetail(slug);

  if (!res.data.data) {
    return <EmptyData />;
  }

  return <CatalogDetail data={res.data.data} />;
}

export default CatalogDetailPage;
