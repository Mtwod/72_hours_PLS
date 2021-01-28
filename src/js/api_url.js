const pageNumber = (pageNumber) => {
  return `&page=${pageNumber}`;
}

const dates = (startDate, endDate) => {
  return `&dates=${startDate},${endDate}`;
}

const gamesUrl = "https://api.rawg.io/api/games";
const apiUrl = `?key=${process.env.API_KEY}`;
const pageSize = "&page_size=9";

const urlOptions = {
  baseUrl: `${gamesUrl}${apiUrl}${pageSize}`,
  pageNumber: pageNumber,
  orderedReleased: `&ordering=released`,
  orderedAdded: `&ordering=-added`,
  dates: dates
};

export { urlOptions, gamesUrl, apiUrl, pageSize };
