import '../sass/style.scss';
import { homePage } from './home_page';
import { searchPage } from './search_page';
import { pageDetail } from './page_detail';
import { pageList } from './page_list';
import { routes } from './routes';
import { tomorrowDate, nextYearDate } from './date';

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

const mainTitleElement = document.getElementById('mainTitle');
mainTitleElement.addEventListener('click', () => {
  homePage();
});

const searchBarElement = document.getElementById('searchBar');
searchBarElement.addEventListener('change', () => {
  searchPage(searchBarElement.value);
});

// "basicURL/#pagelist/borderlands" => ["pagelist", "borderlands"]
// "basicURL/#pagedetail/3543" => ["pagedetail", "3543"]
// "basicURL/#pagelist" => ["pagelist"]