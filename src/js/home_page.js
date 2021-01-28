import { urlOptions, gamesUrl, apiUrl } from './api_url';
import { tomorrowDate, nextYearDate } from './date';
import { platformsImages } from './platforms';
import { handleGamePictureHover } from './card_hover';

const { baseUrl, pageNumberUrl, dates, orderedAdded } = urlOptions;
const pageContent = document.getElementById('pageContent');

const homePage = () => {
  const preparePage = async (pageNumber = 1, replaceHTML = true) => {
    let games = "";
    const finalUrl = `${baseUrl}${pageNumberUrl(pageNumber)}${dates(tomorrowDate, nextYearDate)}${orderedAdded}`;
    try {
      const response = await fetch(finalUrl);
      const data = await response.json();
      data.results.forEach((game) => {
        games += `
            <div class="cardGame">
              <div id="picture-zone-${game.slug}" class="pageListPictureZone">
                <img class="pageListPicture" src="${game.background_image}" alt="Game image">
              </div>
              <h1>${game.name}</h1>
              <div class="platformsIcons">${platformsImages(game)}</div>
              <a href = "#pagedetail/${game.id}">${game.id}</a>
            </div>
        `;
      });

      if (replaceHTML) {
        document.querySelector(".page-list").innerHTML = games;
      } else {
        document.querySelector(".page-list").innerHTML += games;
      }

      // Add events to all game card
      for (const game of data.results) {
        const gameUrl = `${gamesUrl}/${game.id}${apiUrl}`;
        
        const response = await fetch(gameUrl);
        const data = await response.json();
        const developers = data.developers.reduce((developersList, developer) => {
          developersList.push(developer.name);
          return developersList;
        }, []).join(', ');

        const gamePictureZone = document.getElementById(`picture-zone-${game.slug}`);

        gamePictureZone.addEventListener('mouseenter', () => {
          handleGamePictureHover(gamePictureZone, game, developers);
        });

        gamePictureZone.addEventListener('mouseleave', () => {
          gamePictureZone.innerHTML = `<img class="pageListPicture" src="${game.background_image}" alt="Game image">`;
        });
      };
    } catch (error) {
      console.error(error);
    }

    if (pageNumber < 3) {
      document.querySelector(".page-list").insertAdjacentHTML("afterend", `<button id="showMoreButton" class="button"><strong>Show more</strong></button>`);
      const showMoreButton = document.getElementById('showMoreButton');
      showMoreButton.addEventListener('click', () => {
        showMoreButton.remove();
        pageNumber++;
        preparePage(pageNumber, false);
      });
    }
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