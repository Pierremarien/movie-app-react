import { getDefaultOptions, buildApiUrl } from "../apiConfig";

/**
 * Fetch media genres.
 * @param {string} [mediaSupport] - Type of media: "movie", "tv"
 */
export const getGenres = async (mediaSupport) => {
  const path = `genre/${mediaSupport}/list`;
  const response = await fetch(buildApiUrl(path), getDefaultOptions());
  return response.json();
};
