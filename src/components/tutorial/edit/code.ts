export const code1 = `
  import { ShoppingList } from './shopping-list';
  import { createRouter, Component } from 'viage';
  import { ShoppingListAdd } from 'viage';

  export enum States {
    HOME = 'home',
    ADD = 'add',
    <b>EDIT = 'edit',</b>
  };

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
      router.addStates([
        { name: States.HOME, component: ShoppingList,  type: 'DEFAULT' },
        { name: States.ADD, component: ShoppingListAdd,  type: 'NORMAL' },
        <b>{ name: States.EDIT, component: ShoppingListAdd,  type: 'NORMAL' },</b>
      ]);
      // start of by going to the state the page was loaded on
      router.start();
      return this;
    }
  }
`;

export const code2 = `
  <h3 class="not-mobile" style="margin-left: 6px; color: green">\${this.id ? 'Edit' : 'Add Item'}
  </h3>
  <div class="quantity-container">
    <label class="label">Quantity</label>
    <input class="input" type="number" attach="quantity"/>
  </div>
  <div class="name-container">
    <label class="label">Name</label>
    <input class="input" type="text" attach="name"/>
  </div>
  <div class="description-container">
    <label class="label">Description</label>
    <input class="input" type="text" attach="description"/>
  </div>
  <div>
    <button class="save-button button green" attach="save">Save</button>
    <button class="button blue" attach="back">Back</button>
  <div>
`;

export const code3 = `
import { Component } from 'viage';
import { shoppingListService, Item } from '../services/shopping-list-service';
import { States } from './app';
import * as html from './shopping-list-add.html';

export class ShoppingListAdd extends Component {
  private item: Item = {
    purchased: false,
    quantity: 0,
    name: '',
    description: ''
  };

  constructor() {
    super('shopping-list-add');
  }

  init(params: { id: string }) {
    this.setHTML(html, { id: params && params.id });

    // if in edit mode than update the item with the latest data from the service
    <b>if (params && params.id) {</b>
      <b>const data: Item = shoppingListService.getItem(params.id);</b>
      <b>if (data) {</b>
        <b>(&#60HTMLInputElement&#62this.attachments.quantity).value = data.quantity.toString();</b>
        <b>(&#60HTMLInputElement&#62this.attachments.name).value = data.name;</b>
        <b>(&#60HTMLInputElement&#62this.attachments.description).value = data.description;</b>
      }
    }

    // add click handlers
    this.attachments.save.addEventListener('click', () => {
      this.item.quantity = parseInt((&#60HTMLInputElement&#62this.attachments.quantity).value);
      this.item.name = (&#60HTMLInputElement&#62this.attachments.name).value;
      this.item.description = (&#60HTMLInputElement&#62this.attachments.description).value;
      <b>(params && params.id) ? shoppingListService.addItem(this.item) :</b>
        <b>shoppingListService.save();</b>
      const homeUrl = this.router.createUrl(States.HOME);
      this.router.go(homeUrl);
    });

    // handle back
    this.attachments.back.addEventListener('click', () => this.router.back());
    return this;
  }
}
`;
