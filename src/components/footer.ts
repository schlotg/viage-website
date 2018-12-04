import { Component } from 'viage';
import { States } from './app';

  export class Footer extends Component {
    constructor() {
      super('footer');
    }
    init() {
      const home = this.router.createUrl(States.HOME);
      const why = this.router.createUrl(States.WHY);
      const what = this.router.createUrl(States.WHAT);
      const gettingStarted = this.router.createUrl(States.GETTING_STARTED);
      const api = this.router.createUrl(States.API);
      const tutorial = this.router.createUrl(States.TUTORIAL_INTRODUCTION);
      const faq = this.router.createUrl(States.FAQ);

      this.e.classList.add('footer');
      this.setHTML(`
          <div class="container-fluid p-3">
            <ul>
              <li><a href="${home}">Home</a></li>
              <li><a href="${why}">Why</a></li>
              <li><a href="${what}">What</a></li>
              <li><a href="${gettingStarted}">Getting Started</a></li>
              <li><a href="${api}">API</a></li>
              <li><a href="${tutorial}">Tutorial</a></li>
              <li><a href="${faq}">FAQ</a></li>
            </ul>
          </div>
          <p class="justify-content-md-center">Viage ©2018</p>
      `);

      return this;
    }
  }
