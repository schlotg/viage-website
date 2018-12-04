import { Component, StateInfo } from 'viage';
import { NavBar } from './nav-bar/nav-bar';
import { Footer } from './footer';
import { initRouter, States } from './router-states';
export { States } ;

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

    const router = initRouter(this.attachments.portal);
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