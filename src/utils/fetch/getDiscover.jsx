import { getDefaultOptions, buildApiUrl } from "../apiConfig";

/**
 * Fetch latest media.
 * @param {string} [mediaSupport] - Type of media: "movie", "tv"
 */
export const getDiscover = async (mediaSupport) => {
  const path = `discover/${mediaSupport}/`;
  const response = await fetch(buildApiUrl(path), getDefaultOptions());
  return response.json();
};
