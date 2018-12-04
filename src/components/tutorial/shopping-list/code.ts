export const code1 = `
  import { Component } from 'viage';
  import { ShoppingListService, Item } from '../services/shopping-list-service';
  import { ShoppingListElement } from './shopping-list-element';

  export class ShoppingList extends Component {

    constructor(){
      super('shopping-list');
    }

    init() {
      this.setHTML(\`
        <div class="logo-img"></div>
        <button attach="add" style="color:#00c700">Add</button>
        <button attach="clear" style="color:#ff6e6e">Clear</button>
        <div attach="list" class="shopping-list"></div>
      \`);
      this.updateList();
      this.addServiceListener<Item[]>(ShoppingListService, 'update', (list: Item[]) => this.updateList());
      this.attachments.clear.addEventListener('click', () => ShoppingListService.clear());
      return this;
    }

    updateList(){
      this.clearComponents();
      this.attachments.list.innerHTML = '';
      ShoppingListService.forEach(e => {
        this.createComponent(ShoppingListElement).init(e)
          .attach(this.attachments.list);
      });
    }
  }
`;