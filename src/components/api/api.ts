import { Component } from 'viage';
import { States } from '../app';
import * as html from './api.html';
import { code1, code2, code3, code4, code5, code6, code7, code8, code9, code10, code11, code12 } from './code';
import { pp, escapeHtml } from '../codeutils';

export class Api extends Component {
  constructor() {
    super('api');
  }
  init() {
    console.log(html);
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3, code4, code5, code6, code7, code8, code9,
      code10, code11, code12 });
    const router = this.router;
    this.attachments.back.addEventListener('click', () => router.go(router.createUrl(States.GETTING_STARTED)));
    this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.TUTORIAL_INTRODUCTION)));
    return this;
  }
}
