import { getDefaultOptions, buildApiUrl } from "../apiConfig";

/**
 * Fetch search types.
 * @param {string} [searchType] - Type of search actions: "keyword", "collection", "movie", "company", "multi", "person", "tv"
 */
export const getSearch = async (searchType) => {
  const path = `search/${searchType}`;
  const response = await fetch(buildApiUrl(path), getDefaultOptions());
  return response.json();
};
