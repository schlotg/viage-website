import { Component } from 'viage';
import * as logo from '../../images/logo.png';
import { urls } from '../router-states';
import * as html from './nav-bar.html';

export class NavBar extends Component {
  open = false;

  constructor() {
    super('nav-bar');
  }

  init() {
    this.setHTML(html, Object.assign({ logo }, urls));
    const button = this.getAttachment<HTMLButtonElement>('menuButton');
    button.addEventListener('click', () => { this.open = !this.open });
    return this;
  }

  close() {
    const button = this.getAttachment<HTMLButtonElement>('menuButton');
    if (this.open) {
      button.dispatchEvent(new CustomEvent('click', { bubbles: true }));
    }
  }
}
