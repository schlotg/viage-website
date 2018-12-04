export const code1 = `
  import { createRouter, Component, StateInfo } from 'viage';
  ...
    class App
    ...
      init() {
        document.querySelector('title').textContent = this.title;

        this.attach('page', true);
        this.setHTML(...);

        const router = createRouter('main', this.attachments.portal, 'HASH');
        router.addStates([
          { name: States.HOME, component: ShoppingList,  type: 'DEFAULT' },
          { name: States.ADD, component: ShoppingListAdd,  type: 'NORMAL' },
          { name: States.EDIT, component: ShoppingListAdd,  type: 'NORMAL' },
        ]);

        // add a animation handler for router state changes
        <b>router.setStateChangedCallback((stateInfo: StateInfo) => this.stateChanged(stateInfo));</b>

        // start off by going to the state the page was loaded on
        router.start();

        return this;
      }
    ...
`;

export const code2 = `
  stateChanged(stateInfo: StateInfo): Promise<void> {
    return  new Promise((resolve) => {
      console.log('Router State Changed', stateInfo);
      resolve();
    });
  }
`;

export const code3 = `
    .fadeout {
      transition: .5s;
      opacity: 0;
    }

    .fadein {
      transition: .5s;
      opacity: 1;
    }
`;

export const code4 = `
  stateChanged(stateInfo: StateInfo): Promise<void> {
    return  new Promise((resolve) => {
      const portal = this.attachments.portal;
      portal.classList.remove('fadeout');
      portal.classList.remove('fadein');
      portal.classList.add('fadeout');
      setTimeout(() => {
        resolve();
        portal.classList.add('fadein');
      }, 500);
    });
  }
`;

export const code5 = `
  stateChanged(stateInfo: StateInfo): Promise<void> {
    this.alpha = 1;
    this.inc = -.1;
    return  new Promise((resolve) => this.animate(resolve));
  }

  animate(resolve: any) {
    const style = this.attachments.portal.style;
    requestAnimationFrame(() => {
      style.opacity = \`\${this.alpha}\`;
      this.alpha += this.inc;
      if (this.alpha < 0) {
        this.inc = -this.inc;
        resolve();
      }
      (this.inc > 0 && this.alpha >= 1) ? style.opacity = 1.0 : this.animate(resolve);
    });
  }
`;

export const code6 = `
export class App extends Component {

  private title = 'Shopping List';
  private alpha = 1;
  private inc = -.1;

  ...
`;