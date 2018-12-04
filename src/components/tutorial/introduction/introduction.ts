import { Component } from 'viage';
import { States }  from '../../app';
import * as html from './introduction.html';

export class TutorialIntroduction extends Component {
  constructor() {
    super('tutorial-introduction');
  }
  init() {
    const gettingStarted = this.router.createUrl(States.GETTING_STARTED);

    this.setHTML(html, {gettingStarted});

    this.attachments.next.addEventListener('click',
      () => this.router.go(this.router.createUrl(States.TUTORIAL_CREATE_APP)));
  }
}
