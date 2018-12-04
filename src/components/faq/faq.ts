import { Component } from 'viage';
import { States } from '../app';
import { pp, escapeHtml } from '../codeutils';
import * as html from './faq.html';
import { code1, code2, code3, code4, code5 } from './code';

export class Faq extends Component {
  constructor() {
    super('faq');
  }
  init() {
    this.setHTML(html, { pp, escapeHtml, code1, code2, code3, code4, code5 });
      const router = this.router;
      this.attachments.back.addEventListener('click', () => router.back());
      this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.HOME)));
      return this;
    }
  }
