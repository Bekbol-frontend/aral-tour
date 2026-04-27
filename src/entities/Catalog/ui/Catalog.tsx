import { Container } from "@/shared/ui/Container";
import { Section } from "@/shared/ui/Section";
import { getCatalogProducts, getCategories } from "../models/services";
import CatalogCategories from "./CatalogCategories/CatalogCategories";
import { EmptyData } from "@/shared/ui/EmptyData";
import { checkDataArray } from "@/shared/lib/checkDataArray";
import CatalogProducts from "./CatalogProducts/CatalogProducts";

interface IProps {
  category: string | string[] | undefined;
}

async function Catalog({ category }: IProps) {
  const categoriesRes = await getCategories();
  const catalogProductsRes = await getCatalogProducts(category);

  return (
    <Section>
      {checkDataArray(categoriesRes.data.data) ? (
        <CatalogCategories data={categoriesRes.data.data} category={category} />
      ) : (
        <EmptyData />
      )}

      <Container>
        {checkDataArray(catalogProductsRes.data.data) ? (
          <CatalogProducts data={catalogProductsRes.data.data} />
        ) : (
          <EmptyData />
        )}
      </Container>
    </Section>
  );
}

export default Catalog;
