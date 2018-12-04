export const code1 =
`import { Component } from 'viage';

export class App extends Component {
  private title = 'Shopping List';

  constructor() {
    super('app');
  }
  init() {
    document.querySelector('title').textContent = this.title;

    this.attach('page', true);
    this.setHTML(\`
      <h1 style="text-align: center">\${this.title}</h1>
    \`);
    return this;
  }
}`;
