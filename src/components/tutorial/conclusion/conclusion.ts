import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './conclusion.html';
import { pp, escapeHtml } from '../../codeutils';
import { code1 } from './code';
//import * as img4 from '../../../images/img4.png';

export class TutorialConclusion extends Component {
  constructor() {
    super('tutorial-conclusion');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_ANIMATIONS)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.HOME)));
  }
}
