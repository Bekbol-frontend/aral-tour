export interface IReviewTour {
  id: number;
  title: string;
}

export interface IReview {
  id: number;
  user_name: string;
  city: string;
  comment: string;
  rating: number;
  sort_order: number;
  is_active: boolean;
  video_url: string;
  review_url: string;
  tour: IReviewTour;
}
