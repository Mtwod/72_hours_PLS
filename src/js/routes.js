import { homePage } from './home_page';
import { pageDetail } from './page_detail';
import { pageList } from './page_list';

const routes = {
  "": homePage,
  "pagelist": pageList,
  "pagedetail": pageDetail,
};

export { routes };