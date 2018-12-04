import { Component } from 'viage';
import { States }  from '../app';
import * as html from './why.html';

export class Why extends Component {
  constructor() {
    super('why');
  }
  init() {
    this.setHTML(html);
    const router = this.router;
    this.attachments.back.addEventListener('click', () => router.go(router.createUrl(States.HOME)));
    this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.WHAT)));
    return this;
  }
}
