import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './animations.html';
import { pp, escapeHtml } from '../../codeutils';
import { code1, code2, code3, code4, code5, code6 } from './code';
//import * as img4 from '../../../images/img4.png';

export class TutorialAnimations extends Component {
  constructor() {
    super('tutorial-animations');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3, code4, code5, code6 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_STYLING)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_LAZY_LOADING)));
  }
}
