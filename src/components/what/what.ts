import { Component } from 'viage';
import { States } from '../app';
import * as html from './what.html';

export class What extends Component {
  constructor() {
    super('what');
  }
  init() {
    this.setHTML(html);
    const router = this.router;
    this.attachments.back.addEventListener('click', () => router.go(router.createUrl(States.WHY)));
    this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.GETTING_STARTED)));
    return this;
  }
}
