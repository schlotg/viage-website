import { createRouter, Component, StateInfo } from 'viage';
import { Why } from './why';
import { Home } from './home';
import { NavBar } from './nav-bar';
import { Footer } from './footer';
import { Faq } from './faq';
import { Api } from './api';
import { RouterPage } from './router-page';
import { Tutorial } from './tutorial';
import { What } from './what';
import { GettingStarted } from './getting-started';

export enum States {
  HOME = 'home',
  WHY = 'why',
  WHAT = 'what',
  GETTING_STARTED = 'getting_started',
  FAQ = 'faq',
  API = 'api',
  ROUTER = 'router',
  TUTORIAL = 'tutorial'
};

export class App extends Component {

  title = "Viage";
  footerDrawn = false;

  constructor() {
    super('app');
  }
  init() {
    document.querySelector('title').textContent = this.title;
    this.attach('page', true);
    this.setHTML(`
      <div attach="toolbar"></div>
      <div class="portal" attach="portal"></div>
    `);
    // create and configure the router
    const router = createRouter('main', this.attachments.portal, 'HASH');
    router.addStates([
      { name: States.HOME, component: Home,  type: 'DEFAULT' },
      { name: States.WHY, component: Why,  type: 'NORMAL' },
      { name: States.WHAT, component: What,  type: 'NORMAL' },
      { name: States.GETTING_STARTED, component: GettingStarted,  type: 'NORMAL' },
      { name: States.FAQ, component: Faq,  type: 'NORMAL' },
      { name: States.API, component: Api,  type: 'NORMAL' },
      { name: States.ROUTER, component: RouterPage,  type: 'NORMAL' },
      { name: States.TUTORIAL, component: Tutorial,  type: 'NORMAL' },
    ]);
    // add a animation handler for router state changes
    router.setStateChangedCallback((stateInfo: StateInfo) => this.stateChanged(stateInfo));
    this.setRouter(router);
    // create the toolbar component
    const navbar = this.createComponent(NavBar, 'navBar');
    navbar.init().attach(this.attachments.toolbar);
    // start off by going to the state the page was loaded on
    router.start();
    return this;
  }
  drawFooter() {
    // create a footer
    if (!this.footerDrawn) {
      const footer = this.createComponent(Footer, 'footer');
      footer.init();
      this.e.appendChild(footer.e);
      this.footerDrawn = true;
    }
  }
  stateChanged(stateInfo: StateInfo): Promise<void> {
    return  new Promise((resolve) => {
      const portal = this.attachments.portal;
      portal.classList.remove('fadeout');
      portal.classList.remove('fadein');
      portal.classList.add('fadeout');
      const navBar = this.getComponent<NavBar>('navBar');
      navBar.close();
      setTimeout(() => {
        // reset the scroll bar on nav
        window.scrollTo(0,0);
        resolve();
        this.drawFooter();
        portal.classList.add('fadein');
      }, 250);
    });
  }

}