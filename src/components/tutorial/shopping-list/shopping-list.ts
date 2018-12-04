import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './shopping-list.html';
import { code1 } from './code';
import { pp, escapeHtml } from '../../codeutils';

export class TutorialShoppingList extends Component {
  constructor() {
    super('tutorial-shopping-list');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_SHOPPING_LIST_ELEMENT)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_ROUTING)));
  }
}
