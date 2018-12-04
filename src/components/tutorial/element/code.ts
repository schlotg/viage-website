export const code1 = `
  import { Component } from 'viage';

  export class ShoppingListElement extends Component {
    constructor() {
      super('shopping-list-element');
    }
    init() {
      this.setHTML(\`
        <h1 style="text-align: center">Component ShoppingListElement works</h1>
      \`);
      return this;
    }
  }
`;

export const code2 = `
  <div class="not-mobile list-item">
    <input attach="enabled" type="checkbox" \${this.purchased ? "checked": ""} />
    <span style="width: 30px; display: inline-block">\${this.quantity}</span>
    <span style="width: 20%; display: inline-block">\${this.name}</span>
    <span style="width: 40%; display: inline-block">\${this.description}</span>
    <button attach="delete" style="padding: 1px; float: right">Delete</button>
    <button attach="edit" style="padding: 1px; float: right; margin-right: 10px;">Edit</button>
  </div>
`;

export const code3 = `
import { Component } from 'viage';
import * as html from './shopping-list-element.html';
import { Item, ShoppingListService } from '../services/shopping-list-service';

export class ShoppingListElement extends Component {
  private item: Item;

  constructor(){
    super('shopping-list-element');
  }

  init(item: Item) {
    this.item = item;
    this.setHTML(html, {
      description: this.item.description,
      name: this.item.name,
      quantity: this.item.quantity.toString()
    });

    this.attachments.delete.addEventListener('click', () => {
      ShoppingListService.removeItem(this.item._id);
    });
    this.attachments.enabled.addEventListener('click', () => {
      this.item.purchased = attachments.enabled.checked;
      ShoppingListService.save();
    });
    return this;
  }
}
`;