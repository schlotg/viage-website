import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './element.html';
import { code1, code2, code3 } from './code';
import { pp, escapeHtml } from '../../codeutils';


export class TutorialShoppingListElement extends Component {

  constructor() {
    super('tutorial-shopping-list-element');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_SERVICES)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_SHOPPING_LIST)));
  }
}
