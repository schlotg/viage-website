export const code1 = `
  <style type="text/css">
  shopping-list-element {
    color: blue
  }
  </style>
  <button attach="add">Add</button>
  <button attach="clear">Clear</button>
  <div attach="list" style="margin-top:20px;width:575px"></div>
`;

export const code2 = `
&BOLD<div style="background-image: url(\${this.logo}); width: 129px; height: 128px;&!BOLD
margin-left: auto; margin-right: auto; margin-bottom: 20px;"></div>
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
<b>import * as logo from '../assets/logo.png';</b>

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
    <b>this.setHTML(html, { id: params && params.id, logo });</b>

    // if in edit mode than update the item with the latest data from the service
    if (params && params.id) {
      const data = shoppingListService.getItem(params.id);
      if (data) {
        (&#60HTMLInputElement&#62this.attachments.quantity).value = data.quantity.toString();
        (&#60HTMLInputElement&#62this.attachments.name).value = data.name;
        (&#60HTMLInputElement&#62this.attachments.description).value = data.description;
        this.item = data;
      }
    }

    // add save handlers
    this.attachments.save.addEventListener('click', () => {
      this.item.quantity = parseInt((&#60HTMLInputElement&#62this.attachments.quantity).value);
      this.item.name = (&#60HTMLInputElement&#62this.attachments.name).value;
      this.item.description = (&#60HTMLInputElement&#62this.attachments.description).value;
      (params && params.id) ? shoppingListService.addItem(this.item) :
        shoppingListService.save();
      const homeUrl = this.router.createUrl(States.HOME);
      this.router.go(homeUrl);
    });

    // handle back
    this.attachments.back.addEventListener('click', () => this.router.back());
    return this;
  }
}
`;

export const code4 = `
  import { Component } from 'viage';
  import { ShoppingListService, Item } from '../services/shopping-list-service';
  import { ShoppingListElement } from './shopping-list-element';
  import { States } from './app';

  export class ShoppingList extends Component {

    constructor(){
      super('shopping-list');
    }

    init() {
      this.setHTML(\`
        <b>&#60div class="logo-img"&#62&#60/div&#62</b>
        &#60button attach="add" style="color:#00c700"&#62Add&#60/button&#62
        &#60button attach="clear" style="color:#ff6e6e"&#62Clear&#60/button&#62
        &#60div attach="list" class="shopping-list"&#62&#60/div&#62
      \`);
      this.updateList();
      this.addServiceListener<Item[]>(ShoppingListService, 'update', (list: Item[]) => this.updateList());
      this.attachments.clear.addEventListener('click', () => ShoppingListService.clear());
      this.attachments.add.addEventListener('click', () => {
        const addUrl = this.router.createUrl<void>(States.ADD);
        this.router.go(addUrl);
      });
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
  export const code5 = `
  body { font-family: "Segoe UI",Arial,sans-serif; font-weight: 400; margin: 0px; min-width: 280px; }
  .label { display: block; margin-left: auto; margin-right: auto; text-align: center; font-weight: 800; }
  .input { border-radius: 0px; margin-bottom: 15px; display: block; margin-left: auto; margin-right: auto; }
  .red { color: #ff6e6e }
  .green { color: #00c700 }
  .blue { color: #0085ff }
  .shopping-list { margin-top: 20px; background-color: #eeeeee; padding: 5px; }
  .list-item { width: 100%; margin-top: 5px; margin-bottom: 5px; }
  .fadeout { transition: .5s; opacity: 0; }
  .fadein { transition: .5s; opacity: 1; }
  input[type=checkbox], input[type=radio] { box-sizing: border-box; padding: 0; }
  h1 { color:gray; font-weight: 100; }
  button:hover { background-color: #e2e6ea; }
  <b>.logo-img { background-image: url("./assets/logo.png"); width: 129px; height: 128px; margin-left: auto; margin-right: auto; margin-bottom: 20px; }</b>
  .mobile-list-item { width: 100%; margin-top: 5px; margin-bottom: 5px; margin-left: -5px; padding: 5px; border-top-style: solid; border-width: 1px; }
  button {
    color: #111;
    background-color: #f8f9fa;
    border-color: #f8f9fa;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid black;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    transition: background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    min-width: 75px;
  }
  input {
    padding: .375rem 5px;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-image: none;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
  }
  /* if screen width less than 600px*/
  @media only screen and (max-width: 600px) {
    body { margin: 0px; }
    .mobile { display: block; }
    .not-mobile { display: none; }
    .button { margin-top: 5px; margin-bottom: 5px; width: 100%; display: block; width: 98vw; margin-left: auto; margin-right: auto; }
    .list-item { margin-left: -5px; padding: 5px; border-top-style: solid; border-width: 1px; }
    .shopping-list { padding-top: 0px; }
    .quantity-container { width: 100%; display: block; }
    .name-container { width: 100%; display: block; }
    .description-container { width: 100%; display: block; }
    .input { width: 95vw; }
  }
  /* if screen width greater than 600px*/
  @media only screen and (min-width: 600px) {
    body { margin: 8px; }
    .mobile { display: none; }
    .not-mobile { display: block; }
    .list-item { height: 30px; }
    .save-button { margin-left: 4px; }
    .quantity-container { width: 70px; display: inline-block; }
    .name-container { width: 150px; display: inline-block; margin-left: 15px; }
    .description-container { width: 320px; display: inline-block; margin-left: 15px; }
    .input { width: 100%; }
  }
`;

export const code6 = `
  <div class="not-mobile list-item">
    <input attach="enabled" type="checkbox" ${this.purchased ? "checked": ""} />
    <span style="width: 30px; display: inline-block">${this.quantity}</span>
    <span style="width: 20%; display: inline-block">${this.name}</span>
    <span style="width: 40%; display: inline-block">${this.description}</span>
    <button attach="delete" style="padding: 1px; float: right">Delete</button>
    <button attach="edit" style="padding: 1px; float: right; margin-right: 10px;">Edit</button>
  </div>
  <div attach="m_edit" class="mobile list-item">
    <input attach="m_enabled" type="checkbox" ${this.purchased ? "checked": ""} />
    <span style="width: 30px; display: inline-block">${this.quantity}</span>
    <span style="width: 50%; display: inline-block">${this.name}</span>
    <button attach="m_delete" style="padding: 1px; float: right">X</button>
    <div style="display: block; margin-top:20px;">
      <label style="font-weight:800">Description: </label>
      <span style="width: 40%;" >${this.description}</span>
    </div>
  </div>
`;

export const code7 = `
import { Component } from 'viage';
import { Item, shoppingListService } from '../services/shopping-list-service';
import { States } from './app';
import * as html from './shopping-list-element.html';

interface Id {
  id: string;
}

export class ShoppingListElement extends Component {

  private item: Item;

  constructor() {
    super('shopping-list-element');
  }

  init(item: Item) {
    this.item = item;
    this.setHTML(html, {
      description: this.item.description,
      name: this.item.name,
      quantity: this.item.quantity.toString()
    });
    const attachments = this.attachments;
    const remove = () => shoppingListService.removeItem(this.item._id);
    const enable1 = () => {
      this.item.purchased = this.getAttachment<HTMLInputElement>('enabled').checked;
      shoppingListService.save();
    };
    const enable2 = () => {
      this.item.purchased = this.getAttachment<HTMLInputElement>('m_enabled').checked;
      shoppingListService.save();
    };
    const edit = () => {
      const url = this.router.createUrl<Id>(States.EDIT, {id: this.item._id});
      this.router.go(url);
    };
    attachments.delete.addEventListener('click', remove);
    attachments.m_delete.addEventListener('click', remove);
    attachments.enabled.addEventListener('click', enable1);
    attachments.m_enabled.addEventListener('click', enable2);
    this.attachments.edit.addEventListener('click', edit);
    this.attachments.m_edit.addEventListener('click', edit);
    return this;
  }
}
`;

