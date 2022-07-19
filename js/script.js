import ScrollSuave from './modules/scroll-suave.js';
import initAnimaScroll from './modules/scroll-animation.js';
import Accordion from './modules/accordion-list.js';
import initTabNav from './modules/active-tab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import outsideClick from './modules/outside-click.js';
import initMenuMobile from './modules/menu-mobile.js';
import initDate from './modules/date.js';
import initFetchPlanets from './modules/fetchAPI.js';

const scrollSuave = new ScrollSuave('[data-anime="scrollSuave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initAnimaScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
outsideClick();
initDate();
initFetchPlanets();
