import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './styling.html';
import { pp, escapeHtml } from '../../codeutils';
import { code1, code2, code3, code4, code5, code6, code7 } from './code';
import * as logo from '../../../images/logo.png';
import * as img5 from '../../../images/img5.png';

export class TutorialStyling extends Component {
  constructor() {
    super('tutorial-styling-component');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3, code4, code5, code6, code7, logo, img5 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_EDIT_COMPONENT)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_ANIMATIONS)));
  }
}
