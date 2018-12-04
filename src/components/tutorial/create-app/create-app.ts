import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './create-app.html';
import { code1 } from './code';
import { pp, escapeHtml } from '../../codeutils';

export class TutorialCreateApp extends Component {
  constructor() {
    super('tutorial-create-app');
  }
    init() {

    this.setHTML(html, { pp, escapeHtml, code1 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_INTRODUCTION)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_COMPONENTS)));
  }
}
