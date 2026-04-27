import { ITour } from "@/entities/Tour";
import { TourCard } from "@/entities/TourCard";

interface IProps {
  data: ITour[];
}

function CatalogProducts({ data }: IProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {data.map((tour) => (
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
  );
}

export default CatalogProducts;
