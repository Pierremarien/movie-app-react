const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';
/**
 * 
 * base api key authorization
 */
export const getDefaultOptions = () => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${apiKey}`
  }
});

/**
 * path builder
 * @param {string} path new paths parameters to fetch different data
 * @returns 
 */
export const buildApiUrl = (path) => `${baseUrl}${path}`;