import { Component } from 'viage';
import { States } from './app';

  export class What extends Component {
    constructor() {
      super('what');
    }
    init() {
      this.setHTML(`
  <div class="page-header">
    <h1 style="text-align: center">What</h1>
  </div>
  <div class="container">
    <h2>What is Viage?</h2>
    <p>
      Viage is simply 4 very tiny classes, some basic design best practices, and a <a href="https://github.com/schlotg/viage-cli">CLI</a>. The CLI takes care of setting up skeleton projects.
      It configures Typescript and Webpack so all you have to do is start writing code.
    </p>
    <h2>Is Viage fast?</h2>
    <p>
      It turns out that a lot of time and effort goes into making browsers fast with the native APIs. Using them produces good results. To verify this I implemented a
      Viage version of the React Fiber Demo. It is as least as fast as React Fiber. You can see for yourself <a href="https://github.com/schlotg/viage-sierpinski">here</a>
    </p>
    <h2>Is Viage small?</h2>
    <p>
      To test this I created a shopping list app in Angular, React, and Viage. The total code sizes generated for each framework are shown below:
    </p>
    <p><div class="card-body">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Framework</th>
          <th scope="col">Size</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Viage</td>
          <td>19KB</td>
        </tr>
        <tr>
          <td>Angular</td>
          <td>351KB</td>
        </tr>
        <tr>
          <td>React</td>
          <td>158KB</td>
        </tr>
      </tbody>
    </table>
    </p></div>
    <p>
      <i>You can see that Viage in this test case is 8-18 times smaller!</i>
    </p>
    <p>
      For the sake of codes size and complexity comparisons, I have implemented this same app in React and Angular. I tried to keep the code as similar as
      possible within the bounds of each framework. You can find them and a running Viage version here:
      <ul>
        <li><a href="https://schlotg.github.io/shopping-list.html#home">Viage - Running</a></li>
        <li><a href="https://github.com/schlotg/viage-shopping-list">Viage - Project</a></li>
        <li><a href="https://schlotg.github.io/react-shopping-list/index">React - Running</a></li>
        <li><a href="https://github.com/schlotg/react-shopping-list">React - Project</a></li>
        <li><a href="https://schlotg.github.io/angular-shopping-list/home">Angular - Running</a></li>
        <li><a href="https://github.com/schlotg/angular-shopping-list">Angular - Project</a></li>
      </ul>
    </p>
    <h2>Is Viage small?</h2>
    <p>
      I think so. If you compare the React, Angular, and the Viage versions of the Shopping List App. You will see that a similar amount of code had to be
      written for each framework. It is my opinoin that the Viage version wins at being the smallest and easiest to understand.
    </p>
    <h2>What are the advantages of Viage?</h2>
    <p>
      <ul>
        <li>Viage is fast and small</li>
        <li>Viage is very compatible with existing libraries</li>
        <li>Viage relies on standard web technologies that are already well documented and well maintained</li>
        <li>A side effect of this is that Viage has a low complexity and is minimal</li>
        <li>Viage is easy to learn</li>
      </ul>
    </p>
    <p>
      <button attach="back" type="button" class="btn btn-outline-primary">Why</button>
      <button attach="next" type="button" class="btn btn-outline-primary">Getting Started</button>
    </p>
  </div>
        `);
      const router = this.router;
      this.attachments.back.addEventListener('click', () => router.go(router.createUrl(States.WHY)));
      this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.GETTING_STARTED)));
      return this;
    }
  }
