const pageNumberUrl = (pageNumber) => {
  return `&page=${pageNumber}`;
}

const dates = (startDate, endDate) => {
  return `&dates=${startDate},${endDate}`;
}
const platformUrl = (platformId) => {
  return `&platforms=${platformId}`;
}

const baseUrl = "https://api.rawg.io/api/";
const gamesUrl = `${baseUrl}games`;
const platformsUrl = `${baseUrl}platforms`;
const apiUrl = `?key=${process.env.API_KEY}`;
const pageSize = "&page_size=9";

const gamesUrlOptions = {
  baseUrl: `${gamesUrl}${apiUrl}${pageSize}`,
  pageNumberUrl: pageNumberUrl,
  orderedReleased: `&ordering=-released`,
  orderedAdded: `&ordering=-added`,
  dates: dates,
  platformUrl: platformUrl
};

export { gamesUrlOptions, gamesUrl, apiUrl, pageSize, baseUrl, platformsUrl, platformUrl };