import { Container } from "@/shared/ui/Container";
import { MainTitle } from "@/shared/ui/MainTitle";
import { Section } from "@/shared/ui/Section";
import { getTourTopRated } from "../model/services";
import { EmptyData } from "@/shared/ui/EmptyData";
import { TourCard } from "@/entities/TourCard";

async function Tour() {
  const res = await getTourTopRated();

  if (!res.data.data || !res.data.data.length) return <EmptyData />;

  return (
    <Section>
      <MainTitle title="Popular tours" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {res.data.data.map((tour) => (
            <TourCard
              key={tour.id}
              imgUrl={tour.main_image}
              title={tour.title}
              duration_days={tour.duration_days}
              duration_nights={tour.duration_nights}
              rating={tour.rating}
              reviews_count={tour.reviews_count}
              slogan={tour.slogan}
              price={tour.price}
              phone={tour.phone}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Tour;
