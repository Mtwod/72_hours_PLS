import '../sass/style.scss';
import { home } from './home';
import { pageDetail } from './page_detail';
import { pageList } from './page_list';
import { routes } from './routes';

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

// "basicURL/#pagelist/borderlands" => ["pagelist", "borderlands"]
// "basicURL/#pagedetail/3543" => ["pagedetail", "3543"]
// "basicURL/#pagelist" => ["pagelist"]