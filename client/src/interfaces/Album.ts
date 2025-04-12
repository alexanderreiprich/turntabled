export interface Album {
  id: number;
  title: string;
  artist: string;
  release_year: number | null;
  genre: string | null;
  cover_image: string | null;
}