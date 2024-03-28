import axios from "axios";

const URL = "https://api.themoviedb.org/3";
const API_KEY = "818576a752cee049a95f6d7bd309e19f";

const endpoints = {
  originals: "/discover/tv",
  playingNow: "/movie/now_playing",
  trending: "/movies/trending",
  popular: "/movie/popular",
  topRated: "/movies/top_rated",
  upComming: "/movie/upcoming",
};
export const fetchData = (param) => {
  return axios.get(`${URL}${endpoints[param]}?api_key=${API_KEY}`);
};
