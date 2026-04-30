import { Container } from "@/shared/ui/Container";
import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import { getTourTopRated } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import { TourCard } from "@/entities/TourCard";
import TourList from "./TourList/TourList";

async function Tour() {
  const res = await getTourTopRated();

  if (!res.data.data || !res.data.data.length) return <EmptyData />;

  return (
    <Section className="bg-white">
      <MainTitle title="Popular tours" />
      <Container>
        <TourList data={res.data.data} />
      </Container>
    </Section>
  );
}

export default Tour;
