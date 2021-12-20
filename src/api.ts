const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IMovie {
  id: number;
  backdrop_path: string;
  vote_average: number;
  poster_path: string;
  title: string;
  release_date: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
interface IPopularMovie {
  id: number;
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
}
export interface IGetPopularMovies {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IPopularMovie[];
  total_pages: number;
  total_results: number;
}

export function getPopularMovies() {
  return fetch(`${BASE_PATH}/movie/popular?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
export function getTopRatedMovies() {
  return fetch(`${BASE_PATH}/movie/top_rated?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}
