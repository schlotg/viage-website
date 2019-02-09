export const code1 =`
updateList(){
  // remove any components
  this.clearComponents();
  // clear out any existing inner HTML
  this.attachments.list.innerHTML = '';
  ShoppingListService.forEach(e => {
    this.createComponent(ShoppingListElement).init(e)
      .attach(this.attachments.list);
  });
}`;

export const code2 =`
export interface ListenerCallback<T> {
  (data: T): void;
};

export class Listener<T> {
  protected cb: any;
  protected e: HTMLElement | Window;
  protected event: string;
  protected static counter = 0;
  protected id: number;
  constructor (element: HTMLElement | Window, event: string, cb: ListenerCallback<T>) {
    this.cb = (e: CustomEvent) => cb(<T>e.detail);
    this.e = element;
    this.event = event;
    this.e.addEventListener(event, this.cb);
    Listener.counter += 1;
    this.id = Listener.counter;
  }
  remove() {
    if (this.e) {
      this.e.removeEventListener(this.event, this.cb);
      this.e = null;
      this.cb = null;
    }
  }
  isRemoved(): boolean {
    return !this.e;
  }
  getId(): number {
    return this.id;
  }
}`;

export const code3 =
`import { ShoppingList } from './shopping-list';
import { createRouter, RouterType, StateType } from 'viage';
const router = createRouter('main', this.attachments.portal, RouterType.HASH);
router.addStates([
  { name: 'home', component: ShoppingList,  type: StateType.DEFAULT },
  // lazy load the add and edit components
  { name: States.ADD, promise: () => import(/* webpackChunkName: "add" */ './shopping-list-add')
    .then((module) => new module.ShoppingListAdd()),  type: 'NORMAL' },
  { name: States.EDIT, promise: () => import(/* webpackChunkName: "add" */ './shopping-list-add')
    .then((module) => new module.ShoppingListAdd()),  type: 'NORMAL' },
]);
router.start();`;

export const code4 =
`interface State<T extends Component> {
  name: string;
  component?: T;
  promise?: any;
  type: 'DEFAULT' | 'NORMAL';
}`;


export const code5 =
`const homeUrl = this.router.createUrl<void>(States.HOME);
const editUrl = this.router.createUrl<Id>(States.EDIT, {id: this.item._id});`;

export const code6 =
`const router = getRouter('main');
const homeUrl = router.createUrl('home');
router.go(homeUrl);`;

export const code6_5 =
`const router = getRouter('main');
router.goDirect('home');`;

export const code7 =
`// add a handler for router state changes
router.setStateChangedCallback((stateInfo: StateInfo) => {
  return new Promise((resolve) => {
    console.log('Router State Change is about to happen', stateInfo);
    resolve(); // actually trigger the state change
    console.log('Router State Change just happened');
  });
};`;

export const code8 =
`<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <page>
      <p style="text-align: center" id="viage-loading">Loading....</p>
    </page>
    <script>
      window.addEventListener('load', () => {
        setTimeout(() => {
          const e = document.querySelector('#viage-loading');
          if (e) {
            e.textContent = 'This page is not supported by your browser. Please consider using Safari, Firefox, Edge, or Chrome';
          }
        }, 1000);
      });
    </script>
  </body>
</html>`;

export const code9 =
`import { App } from './components/app';
import './index.css';
import { isCompatible } from 'viage';

export let app: App;
if (isCompatible()) {
    app = new App();
}`;

export const code10 =
`import { Component } from 'viage';

export class MyComponent extends Component {
  protected first = 'John';
  protected last = 'Doe';
  constructor() {
    super('my-component');
  }
  init() {
    // sets the html to: &#60p&#62name: John Doe&#60/p&#62
    this.setHTML(\`&#60p&#62name: \${this.first} \${this.last}&#60/p&#62\`);
  }
}`;

export const code11 =
`import { Component } from 'viage';
import * as html from './test.html';

export class MyComponent extends Component {
  protected first = 'John';
  protected last = 'Doe';
  constructor() {
    super('my-component');
  }
  init() {
    // sets the html to: &#60p&#62name: John Doe&#60/p&#62
    this.setHTML(html, this);
  }
}`;

export const code12 =
`init() {
  // sets the html to: &#60p&#62name: John Doe&#60/p&#62
  this.setHTML(html, { first: 'John', last: 'Doe' });
}`;