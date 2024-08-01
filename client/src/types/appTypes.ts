export type GenreType = {
  id: number;
  name: string;
};

export type TrackType = {
  id: number;
  group: string;
  title: string;
  img: string;
  genre_id: number;
  liked?: boolean;
};

export type TrackCrateType = {
  group: string;
  title: string;
  img: string;
  genre_id: number;
};
