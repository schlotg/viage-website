import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './add.html';
import { pp, escapeHtml } from '../../codeutils';
import { code1, code2, code3 } from './code';
import * as img1 from '../../../images/img1.png';
import * as img2 from '../../../images/img2.png';
import * as img3 from '../../../images/img3.png';


export class TutorialAddComponent extends Component {
  constructor() {
    super('tutorial-add-component');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3, img1, img2, img3 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_ROUTING)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_EDIT_COMPONENT)));
  }
}
