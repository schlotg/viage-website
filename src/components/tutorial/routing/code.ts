export const code1 = `
  import { ShoppingList } from './shopping-list';
  import { createRouter, Component } from 'viage';

  <b>export enum States {</b>
    <b>HOME = 'home',</b>
  <b>};</b>

  export class App extends Component {

    private title = 'Shopping List';

    constructor() {
      super('app');
    }

    init() {
      document.querySelector('title').textContent = this.title;

      this.attach('page', true);
      this.setHTML(\`
        &#60h1 style="text-align: center"&#62\${this.title}&#60/h1&#62
        &#60div style="width: 100%; min-width: 654px" attach="portal"&#62&#60/div&#62
      \`);

      const router = createRouter('main', this.attachments.portal, 'HASH');
      <b>router.addStates([</b>
        <b>{ name: States.HOME, component: ShoppingList,  type: 'DEFAULT' },</b>
      <b>]);</b>
      // start of by going to the state the page was loaded on
      router.start();
      return this;
    }
  }
`;
