import { Component } from 'viage';
import * as html from './home.html';

export class Home extends Component {
  constructor() {
    super('home');
  }
  init() {
    this.setHTML(html);
    return this;
  }
}
