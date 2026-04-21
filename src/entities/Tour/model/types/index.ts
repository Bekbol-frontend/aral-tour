export interface ITourCategory {
  id: number;
  name: string;
}

export interface ITourImage {
  id: number;
  url: string;
  is_main: boolean;
}

export interface ITour {
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
}
