import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './lazy-loading.html';
import { code1 } from './code';
import { pp, escapeHtml } from '../../codeutils';


export class TutorialLazyLoading extends Component {

  constructor() {
    super('tutorial-lazy-loading');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1 });

    this.attachments.prev.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_ANIMATIONS)));

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_CONCLUSION)));
  }
}
