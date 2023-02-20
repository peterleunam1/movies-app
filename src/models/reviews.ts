export interface Reviews {
  id: number;
  page: number;
  results: ResultReviews[];
  total_pages: number;
  total_results: number;
}

export interface ResultReviews {
  author: string;
  author_details: Authordetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}

interface Authordetails {
  name: string;
  username: string;
  avatar_path?: string;
  rating: number;
}
