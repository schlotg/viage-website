import { Component } from 'viage';
import { States } from '../app';
import * as html from './router.html';

export class RouterPage extends Component {

  constructor() {
    super('router');
  }
  init() {
    this.setHTML(html, Object.assign(this, {States}));
    const router = this.router;
    this.attachments.back.addEventListener('click', () => router.back());
    this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.HOME)));
    return this;
  }
}
