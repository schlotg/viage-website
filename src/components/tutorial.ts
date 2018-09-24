import { Component } from 'viage';
import { States } from './app';

  export class Tutorial extends Component {
    constructor() {
      super('tutorial');
    }
    init() {
      this.setHTML(`
        <div class="page-header">
          <h1 style="text-align: center">Tutorial</h1>
        </div>
        <div class="container">
          <h2>Shopping List Tutorial</h2>
          <p>
            The Shopping list tutorial is a simple app that walks you through most of the concepts needed to be a proficient
            Viage Developer. This project can be cloned from github <a href="https://github.com/schlotg/viage-shopping-list">here</a>
          </p>
          <p> A proper web page version of this tutorial is coming soon.
          </p>
          <p>
            <button attach="back" type="button" class="btn btn-outline-primary">Back</button>
            <button attach="next" type="button" class="btn btn-outline-primary">Home</button>
          </p>
        </div>
      `);
      const router = this.router;
      this.attachments.back.addEventListener('click', () => router.back());
      this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.HOME)));
      return this;
    }
  }
