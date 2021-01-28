import { gamesUrlOptions, gamesUrl, apiUrl } from './api_url';
import { tomorrowDate, nextYearDate } from './date';
import { platformsImages } from './platforms';
import { handleGamePictureHover } from './card_hover';
import { selectPlatformHtml } from "./platform_dropdown";

const { baseUrl, pageNumberUrl, dates, orderedAdded } = gamesUrlOptions;
const pageContent = document.getElementById('pageContent');

const homePage = () => {
  const preparePage = async (pageNumber = 1, replaceHTML = true) => {
    let games = "";
    const finalUrl = `${baseUrl}${pageNumberUrl(pageNumber)}${dates(tomorrowDate, nextYearDate)}${orderedAdded}`;
    try {
      const response = await fetch(finalUrl);
      const data = await response.json();
      data.results.forEach((game) => {
        const { slug, background_image, name, id } = game;
        games += `
            <div class="cardGame">
              <div id="picture-zone-${slug}" class="pageListPictureZone">
                <img class="pageListPicture" src="${background_image ? background_image : "../images/no-image.png"}" alt="Game image">
              </div>
              <h1><a href="#">${name}</a></h1>
              <div class="platformsIcons">${platformsImages(game)}</div>
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
      <h1>Welcome,</h1>
      <span id="welcomeMessage">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best, brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies, groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</span>

      <section class="page-list">
        <p>...loading</p>
      </section>
    `;
    selectPlatformHtml();
    preparePage();
  };
  render();
};

export { homePage };
