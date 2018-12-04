import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './routing.html';
import { code1 } from './code';
import { pp, escapeHtml } from '../../codeutils';

export class TutorialRouting extends Component {
  constructor() {
    super('tutorial-routing');
  }
  init() {

    const routerApiLink = this.router.createUrl(States.API);
    this.setHTML(html, { pp, escapeHtml, routerApiLink, code1 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_SHOPPING_LIST)));
    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_ADD_COMPONENT)));
  }
}
