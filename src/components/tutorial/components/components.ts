import { Component } from 'viage';
import * as html from './components.html';
import { pp, escapeHtml } from '../../codeutils';
import { code1 } from './code';
import { States } from '../../app';

export class TutorialComponents extends Component {
  constructor() {
    super('tutorial-components');
  }

  init() {
    this.setHTML(html, { pp, escapeHtml, code1 });

    // hook up the buttons
    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_CREATE_APP)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_SERVICES)));
  }
}
