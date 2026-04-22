export interface IAboutDataImages {
  id: number;
  image_path: string;
}

export interface IAboutAward {
  description: string;
  images: IAboutDataImages[];
}

export interface IAboutData {
  id: number;
  title: string;
  description: string;
  is_active: boolean;
  images: IAboutDataImages[];
  award: IAboutAward;
}
