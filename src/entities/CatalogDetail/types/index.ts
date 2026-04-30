import { IReview } from "@/entities/Review/model/types";
import { ITourCategory, ITourImage } from "@/entities/Tour";

interface IItineraries {
  day_number: number;
  event_time: string;
  activity_title: string;
  activity_description: string;
}

interface IFeatures {
  id: number;
  name: string;
  description: string;
  icon: string;
  is_included: boolean;
}

interface IFaqDetailQuestion {
  question: string;
  answer: string;
}

interface IFaqDetail {
  title: string;
  questions: IFaqDetailQuestion[];
}

interface IAccommodations {
  day_number: number;
  type: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface DetailReview {
  id: number;
  user_name: string;
  email: string;
  rating: number;
  comment: string;
  video_url: null | string;
  created_at: string;
}

export interface ICatalogDetail {
  id: number;
  slug: string;
  title: string;
  slogan: string;
  description: string;
  routes: string;
  important_info: string;
  price: number;
  phone: string;
  duration_days: number;
  duration_nights: number;
  min_age: number;
  max_people: number;
  rating: number;
  reviews_count: number;
  is_active: boolean;
  category: ITourCategory;
  main_image: string;
  images: ITourImage[];
  itineraries: IItineraries[];
  features: IFeatures[];
  faq: IFaqDetail[];
  accommodations: IAccommodations[];
  reviews: DetailReview[];
}
