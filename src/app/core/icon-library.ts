import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faBars,
  faBell,
  faChartBar,
  faCheckCircle,
  faChevronDown,
  faCircle,
  faClock,
  faComments,
  faEyeSlash,
  faHome,
  faLifeRing,
  faMoneyCheckAlt,
  faPalette,
  faReply,
  faShoppingCart,
  faSortDown,
  faTh,
  faUserPlus,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import {
  faArrowFromLeft,
  faArrowFromRight,
} from '@fortawesome/pro-solid-svg-icons';

export function installFontAwesomeIcons() {
  library.add(faBell);
  library.add(faChartBar);
  library.add(faChevronDown);
  library.add(faSortDown);
  library.add(faCheckCircle);
  library.add(faComments);
  library.add(faLifeRing);
  library.add(faPalette);
  library.add(faShoppingCart);
  library.add(faUsers);
  library.add(faUserPlus);
  library.add(faMoneyCheckAlt);
  library.add(faClock);
  library.add(faBars);
  library.add(faReply);
  library.add(faEyeSlash);
  library.add(faCircle);
  library.add(faTh);
  library.add(faHome);
  library.add(faArrowRight);
  library.add(faArrowFromRight);
  library.add(faArrowFromLeft);
}
