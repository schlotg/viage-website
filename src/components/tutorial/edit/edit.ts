import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './edit.html';
import { pp, escapeHtml } from '../../codeutils';
import { code1, code2, code3 } from './code';
import * as img4 from '../../../images/img4.png';

export class TutorialEditComponent extends Component {
  constructor() {
    super('tutorial-edit-component');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3, img4 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_ADD_COMPONENT)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_STYLING)));
  }
}
