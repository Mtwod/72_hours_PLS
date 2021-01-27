import { urlOptions } from './api_url';
import { tomorrowDate, nextYearDate } from './date';

const { baseUrl, pageNumber, dates, orderedAdded } = urlOptions;

const pageContent = document.getElementById('pageContent');

const displayGameList = async () => {
  
};

const homePage = () => {
  const preparePage = async () => {
    let games = "";
    const finalUrl = `${baseUrl}${pageNumber(1)}${dates(tomorrowDate, nextYearDate)}${orderedAdded}`;
    try {
      const response = await fetch(finalUrl);
      const data = await response.json();
      data.results.forEach((game) => {
        games += `
            <div class="cardGame">
              <img class="pageListPicture" src="${game.background_image}" alt="Game image">
              <h1>${game.name}</h1>
              <h2>${game.released}</h2>
              <a href = "#pagedetail/${game.id}">${game.id}</a>
            </div>
        `;
      });
    } catch (error) {
      console.error(error);
    }
    document.querySelector(".page-list .games").innerHTML = games;
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <div class="games">...loading</div>
      </section>
    `;
    preparePage();
  };
  render();
};

export { homePage };