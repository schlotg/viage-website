export const code1 =
`  new CopyWebpackPlugin([
    { from:'node_modules/@fortawesome/fontawesome-free/css/all.css', to: 'css/all.css' },
    { from:'node_modules/@fortawesome/fontawesome-free/webfonts/*', to: 'webfonts/',  flatten: 'true'},
  ])
`;

export const code2 =
`import { Component }from 'viage';
import * as logo from '../logo.png';

  export class Toolbar extends Component {
    constructor() {
      super('toolbar');
    }
    init() {
      this.setHTML(\`
        &#60div class="toolbar"&#62
          &#60img src="\${logo.default}" width="32px"/&#62
        &#60/div&#62
      \`);
      return this;
    }
  }
`;

export const code3 =
`import { Component } from 'viage';
import * as html from './myhtml.html';

export class MyComponent extends Component {
  constructor() {
    super('my-component');
  }
  init() {
    this.setHTML(html);
  }
}`;

export const code4 =
`import { Component } from 'viage';
import * as html from './test.html';

export class MyComponent extends Component {
  protected first = 'John';
  protected last = 'Doe';
  constructor() {
    super('my-component');
  }
  init() {
    // sets the html to: '&#60p&#62name:John Doe&#60/p&#62'
    this.setHTML(html, this);
  }
}`;

export const code5 =
`import { Component } from 'viage';
import * as html from './test.html';

export class MyComponent extends Component {
  constructor() {
    super('my-component');
  }
  init() {
    // sets the html to: '&#60p&#62name:John Doe&#60/p&#62'
    this.setHTML(html, {first: 'John', last: 'Doe'});
  }
}`;