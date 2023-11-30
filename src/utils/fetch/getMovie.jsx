import { getDefaultOptions, buildApiUrl } from "../apiConfig";

/**
 * Fetch movie details and some additional details.
 * @param {string} [movieId] -  The ID of the movie
 * @param {string} [paramStr] - Additional parameters: "images", "keywords", "lists", "recommendations", "release dates", "reviews", "similar"
 */
export const getMovie = async (movieId, paramStr) => {
  const path = `movie/${movieId}${paramStr}`;
  const response = await fetch(buildApiUrl(path), getDefaultOptions());
  return response.json();
};
