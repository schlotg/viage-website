import { Component } from 'viage';
import { States } from '../app';
import * as html from './getting-started.html';
import { pp } from '../codeutils';

  export class GettingStarted extends Component {
    constructor() {
      super('getting-started');
    }
    init() {
      const router = this.router;
      // create the urls
      const api = router.createUrl(States.API);
      const tutorial = router.createUrl(States.TUTORIAL_INTRODUCTION);
      const faq = router.createUrl(States.FAQ);
      const routerLink = router.createUrl(States.ROUTER);
      // set the html
      this.setHTML(html, { pp, api, tutorial, faq, routerLink });
      // add button listeners
      this.attachments.back.addEventListener('click', () => router.go(router.createUrl(States.WHAT)));
      this.attachments.next.addEventListener('click', () => router.go(api));
      return this;
    }
  }
