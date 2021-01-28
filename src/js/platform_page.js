import { gamesUrlOptions, gamesUrl, apiUrl } from './api_url';
import { tomorrowDate, nextYearDate } from './date';
import { platformsImages } from './platforms';
import { handleGamePictureHover } from './card_hover';
import { selectPlatformHtml } from "./platform_dropdown";

const { baseUrl, pageNumberUrl, orderedReleased, platformUrl } = gamesUrlOptions;
const pageContent = document.getElementById('pageContent');

const platformPage = (platformSearched = "") => {
  const preparePage = async (pageNumber = 1, replaceHTML = true) => {
    let games = "";
    const finalUrl = `${baseUrl}${pageNumberUrl(pageNumber)}${platformUrl(platformSearched.id)}${orderedReleased}`;
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
      <h1>Results for </h1>
      <span id="welcomeMessage"></span>

      <section class="page-list">
        <p>...loading</p>
      </section>
    `;
    selectPlatformHtml();
    preparePage();
  };
  render();
};

export { platformPage };
