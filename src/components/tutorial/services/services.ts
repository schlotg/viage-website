import { Component } from 'viage';
import * as html from './services.html';
import { pp, escapeHtml } from '../../codeutils';
import { States } from '../../app';
import { code1, code2, code3, code4, code5, code6 } from './code';

export class TutorialServices extends Component {
  constructor() {
    super('tutorial-services');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3, code4, code5, code6 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_COMPONENTS)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_SHOPPING_LIST_ELEMENT)));
  }
}
