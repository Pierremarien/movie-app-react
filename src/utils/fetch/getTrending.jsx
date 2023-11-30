import { getDefaultOptions, buildApiUrl } from "../apiConfig";

/**
 * Fetch trending media.
 * @param {string} [mediaSupport] - Type of media: "movie", "tv", "people". Defaults to "all".
 */
export const getTrending = async (mediaSupport) => {
  const path = `trending/${mediaSupport || "all"}/day?language=en-US`;
  const response = await fetch(buildApiUrl(path), getDefaultOptions());
  return response.json();
};
