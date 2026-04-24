import { Container } from "@/shared/ui/Container";
import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import FAQItems from "./FAQItems/FAQItems";
import { getFAQ } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";

async function FAQ() {
  const res = await getFAQ();

  if (!res.data.data || !res.data.data.length) {
    return <EmptyData />;
  }

  return (
    <Section>
      <MainTitle title="FAQ" noTranslate />
      <Container>
        <FAQItems data={res.data.data} />
      </Container>
    </Section>
  );
}

export default FAQ;
