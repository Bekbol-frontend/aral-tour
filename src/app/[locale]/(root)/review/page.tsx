import { Banner } from "@/entities/Banner";
import { Contact } from "@/entities/Contact";
import { FAQ } from "@/entities/FAQ";
import { IReview } from "@/entities/Review/model/types";
import { ReviewsList } from "@/entities/ReviewsList";
import { getServerClient } from "@/shared/api";
import { checkDataArray } from "@/shared/lib/checkDataArray";
import { IBanner } from "@/shared/types/banner";
import { IData } from "@/shared/types/data";
import { EmptyData } from "@/shared/ui/EmptyData";

const getReviewBanner = async () => {
  const API = await getServerClient();
  return await API.get<IData<IBanner>>("api/reviews/banner");
};

const getReviews = async () => {
  const API = await getServerClient();
  return await API.get<IData<IReview[]>>("api/reviews");
};

async function ReviewPage() {
  const bannerRes = await getReviewBanner();
  const reviewsRes = await getReviews();

  return (
    <>
      <Banner data={bannerRes.data.data} />
      <>
        {checkDataArray(reviewsRes.data.data) ? (
          <ReviewsList data={reviewsRes.data.data} />
        ) : (
          <EmptyData />
        )}
      </>
      <FAQ />
      <Contact />
    </>
  );
}

export default ReviewPage;
