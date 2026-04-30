import { CatalogDetail, ICatalogDetail } from "@/entities/CatalogDetail";
import { getServerClient } from "@/shared/api";
import { IData } from "@/shared/types/data";
import { Container } from "@/shared/ui/Container";
import { EmptyData } from "@/shared/ui/EmptyData";
import { Section } from "@/shared/ui/Section";

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

  return (
    <Section>
      <Container>
        <CatalogDetail data={res.data.data} />
      </Container>
    </Section>
  );
}

export default CatalogDetailPage;
