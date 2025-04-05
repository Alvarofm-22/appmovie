export interface Movie {
    id: number;
    original_title: string;
    overview: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
    backdrop_path: string;
  }
  
  export interface MovieResponse {
    page: number;
    results: Movie[];
    total_results: number;
    total_pages: number;
  }
  