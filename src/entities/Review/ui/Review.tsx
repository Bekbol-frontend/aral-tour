import { Container } from "@/shared/ui/Container";
import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import { getReviewsAll } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import ReviewSwiper from "./ReviewSwiper/ReviewSwiper";

async function Review() {
  const res = await getReviewsAll();

  if (!res.data.data || !res.data.data.length) return <EmptyData />;

  return (
    <Section>
      <MainTitle title="Reviews" />
      <Container>
        <ReviewSwiper data={res.data.data} />
      </Container>
    </Section>
  );
}

export default Review;
