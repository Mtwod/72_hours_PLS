import { gamesUrl, apiUrl } from './api_url';
import { platformsImages } from './platforms';

const pageContent = document.getElementById('pageContent');

const arrayToNamesListColumn = (array) => {
  const list = array.reduce((list, object) => {
    list.push(object.name);
    return list;
  }, []).join('<br/>');
  return list;
};

const arrayToNamesList = (array) => {
  const list = array.reduce((list, object) => {
    list.push(object.name);
    return list;
  }, []).join(', ');
  return list;
};


const pageDetail = (argument) => {
  const preparePage = async () => {
    // Should not be necessary
    const cleanedArgument = argument.replace(/\s+/g, "-");
    const url = `${gamesUrl}/${cleanedArgument}${apiUrl}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { 
        background_image,
        website,
        name,
        description,
        rating,
        ratings_count,
        released,
        developers,
        platforms,
        publishers,
        genres,
        tags,
        stores,
        clip
       } = data;
      document.getElementById('gameDetailBackground').src = background_image;
      document.getElementById('websiteButton').href = website;
      document.getElementById('name').innerHTML = name;
      document.getElementById('rating').innerHTML = `${rating}/5 - ${ratings_count} votes`;
      document.getElementById('description').innerHTML = description;
      document.getElementById('released').innerHTML = released;

      const developersList = arrayToNamesListColumn(developers);
      document.getElementById('developers').innerHTML = developersList;
      
      const platformsList = platforms.reduce((list, object) => {
        list.push(object.platform.name);
        return list;
      }, []).join('<br/>');
      document.getElementById('platforms').innerHTML = platformsList;


      const publishersList = arrayToNamesListColumn(publishers);
      document.getElementById('publishers').innerHTML = publishersList;

      const genresList = arrayToNamesList(genres);
      document.getElementById('genres').innerHTML = genresList;

      const tagsList = arrayToNamesList(tags);
      document.getElementById('tags').innerHTML = tagsList;
      
    } catch (error) {
      console.error(error);
    }
  };

  const render = () => {
    pageContent.innerHTML = `
      <section class="page-detail">
        <h2>Loading game info...</h2>
        <div id="gameDetailBackgroundZone">
          <img id="gameDetailBackground" src="" alt="Image of game">
          <a id="websiteButton" href="#" class="button"><strong>See website</strong></a>
        </div>
        <div class="grid-container">
          <h1 id="name"></h1>
          <h1 id="rating"></h1>
        </div>
        <p id="description"></p>
        <div class="grid-container">
          <div class="detailsColumn">
            <strong>Release date</strong>
            <span id="released"></span>
          </div>
          <div class="detailsColumn">
            <strong>Developers</strong>
            <span id="developers"></span>
          </div>
          <div class="detailsColumn">
            <strong>Platforms</strong>
            <span id="platforms"></span>
          </div>
          <div class=detailsColumn">
            <strong>Publishers</strong>
            <span id="publishers"></span>
          </div>
        </div>
        <div class="grid-container">
          <div class="detailsColumn">
            <strong>Genres</strong>
            <span id="genres"></span>
          </div>
          <div class="detailsColumn">
            <strong>Tags</strong>
            <span id="tags"></span>
          </div>
        </div>
        <h1 class="detailPageRedTitle">BUY</h1>
        <span id="stores"></span>
        <h1 class="detailPageRedTitle">TRAILER</h1>
        <video controls>
          <source id="clip" src="maVideo.mp4" type="video/mp4">
        </video>
        <h1 class="detailPageRedTitle">SCREENSHOTS</h1>
        <h1 class="detailPageRedTitle">YOUTUBE</h1>
        <h1 class="detailPageRedTitle">SIMILAR GAMES</h1>
      </section>
    `;

    preparePage();
  };

  render();
};

export { pageDetail };