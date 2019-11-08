import { config } from "../config";

export const urls = {
  catalogueUrl: {
    fixed: `http://api.themoviedb.org/3/movie/now_playing`,
    apiKey: `?api_key=${config.apiKey}`
  },
  similarsUrl: {
    fixed: `http://api.themoviedb.org/3/movie/`,
    apiKey: `?api_key=${config.apiKey}`
  },
  videosUrl: {
    fixed: `http://api.themoviedb.org/3/movie/`,
    apiKey: `?api_key=${config.apiKey}`
  },
  creditsUrl: {
    fixed: `http://api.themoviedb.org/3/movie/`,
    apiKey: `?api_key=${config.apiKey}`
  },

};
