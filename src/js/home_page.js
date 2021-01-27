import { urlOptions } from './api_url';
import { tomorrowDate, nextYearDate } from './date';
import { platformsImages } from './platforms';

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
              <div class="platformsIcons">${platformsImages(game)}</div>
              <a href = "#pagedetail/${game.id}">${game.id}</a>
            </div>
        `;
      });
    } catch (error) {
      console.error(error);
    }
    document.querySelector(".page-list").innerHTML = games;
    document.querySelector(".page-list").insertAdjacentHTML("beforeend", `<a href="#" class="button"><strong>Show more</strong></a>`);
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-list">
        <p>...loading</p>
      </section>
    `;
    preparePage();
  };
  render();
};

export { homePage };