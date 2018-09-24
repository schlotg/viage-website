import { Component } from 'viage';
import * as logo from '../images/logo.png';
import { States } from './app';
  export class NavBar extends Component {
    constructor() {
      super('nav-bar');
    }
    init() {
      const home = this.router.createUrl(States.HOME);
      const tutorial = this.router.createUrl(States.TUTORIAL);
      const api = this.router.createUrl(States.API);
      const router = this.router.createUrl(States.ROUTER);
      const faq = this.router.createUrl(States.FAQ);
      const why = this.router.createUrl(States.WHY);
      const what = this.router.createUrl(States.WHAT);
      const getting_started = this.router.createUrl(States.GETTING_STARTED);


      this.setHTML(`
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href=${home}><img class="logo-brand" src="${logo}"/>iage</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="${home}">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${why}">Why</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${what}">What</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${getting_started}">Getting Started</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${api}">API</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${tutorial}">Tutorial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${router}">Router</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="${faq}">FAQ</a>
            </li>
           </ul>
        </div>
      </nav>`);
      return this;
    }
  }
