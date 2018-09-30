import { Component } from 'viage';
import { States }  from './app';

  export class Why extends Component {
    constructor() {
      super('why');
    }
    init() {
      this.setHTML(`
<div class="page-header">
  <h1 style="text-align: center">Why</h1>
</div>
<div class="container">
  <h2>Why create Viage?</h2>
  <p>
  In a world already full of Javascript frameworks, why create another? I have used React, Angular, and Web Components in production environments. Each one has it's
  own set of advantages and disadvantages. But more often than not, I find myself wishing for something lenaner and meaner.
  </p>
  <p>
  There are some really great technologies available today in both the toolchains and browers. What if someone built a minimal framework that leveraged the great
  capabilities available in both modern tool chains and modern browsers but ignored trying to be backward compatible with older browsers such as IE11.
  This is that framework.
  </p>
  <h2>It is 2018</h2>
  <p>
  According to various Web stats, less than 5% of all web traffic is IE, and its market share is shrinking fast. This leaves about 95% of the world using modern
  up-to-date browsers.In the last serveral years there have been some really great technologies that have become available to Web Developers. Modern web browsers
  update themselves. The common features and capabilties across the big 4, (Edge, Chrome, Firefox, and Safari) have converged into a very useful, robust set.
  This is true across their assocaited mobile versions as well.
  </p>
  <p>
    <i>Note - IE still has more users than Edge but IE has less than 5% of internet traffic (Depending on which stat site you visit). UC Browser is on the rise
    and it appears to have a modern feature set, but info and compatability tables for it are hard to find</i>
  </p>
  <div style="margin-left: 10px;">
    <h4>Typescript</h4>
    <p>
    When I write code for the web, I really enjoy using Typescript.
    Type checking is wonderful thing and it allows editors such as Visual Studio Code to auto-complete code. It also helps eliminate run-time errors, build scalable code,
    and allows editors to have built in as you type linters. Everytime I have to go back and write normal Javascript, it is a painful experience and I realize what
    a beautiful thing strong typing is.
    <p>
    Typescript builds off of ES6 features and brings templated strings, promises, classes and a host of new language features that are amazing editions to the language.
    </p>
    </p>
    <h4>Webpack</h4>
    <p>
    Webpack and tools like it allow you to write code in a modular way and package everything up into web friendly packages while still keeping the map files intact so that
    debugging just works.
    </p>
    <h4>Package Managers</h4>
    <p>
    NPM or Yarn are great package managers that allow libararies to be imported and managed on a per project level and Node is a great development environment.
    </p>
    <h4>Modern DOM APIs</h4>
    <p>
    Modern DOM APIs have Flex Boxes, CSS Animation Engines, Webworkers, and a easy and common way to interact with DOM elements.
    There is really no need to use libraries like jQuery anymore if you are targeting modern desktop and mobile browsers.
    </p>
  </div>
  <h2> React and Angular </h2>
  <p>
    While React and Angular solve a lot of problems and are amazing, I still find myself having issues:
  </p>
  <ul>
    <li>
      When I work with React, I find that JSX and the virtual DOM get in my way. I end up adding DIV elements that act as containers so the JSX compiler is happy.
      There are limits on what you can do with inline styling, and things that were easy, such as styling buttons, are now harder. Getting data out of a form, means
      I have add handlers to each field so that when the data changes, I can keep track of it. Because I am interacting with a virtual DOM, I can't just ask the form
      elements for their values. Because everything is passed down through components, including callbacks to notify the parents of changes, I often find that changing
      functionality requires changes in the entire parent child chain.
    </li>
    <li>
      When I work with Angular, I find that its complexity is high. Because you have to use a lot of HTML directives in your HTML, there is a learning curve for yet another
      part of this large framework. The HTML template directives are hard to debug because you can't step into them. Passing data in and out of a component should be trivial
      and its not. Adding a module usually requires me to modify code in several files and almost every bit of standard functionality has a new and different Angular
      counterpart. For instance, adding a click handler should be as close to the DOM APIs as possible but instead you have to use a template directive.
    </li>
  </ul>
  <h2>A Better Way?</h2>
  <p>
    So is there a better way that relies on existing DOM and JS functionality?
  </p>
  <p>
    That is exactly the question I am trying to answer. If I just use some reasonable practices and modern features, do these large frameworks really buy me anything?
    Here are the design principles I am using in this project:
  </p>
  <ul>
      <li>Use only Modern Web APIs that are standard across the big 4 browsers</li>
      <li>Take advantage of JS / TS modern language features</li>
      <li>Keep everything as simple as possible while still maintaining easy development</li>
      <li>Be as compatible as possible with already existing Javascript libraries and standards</li>
      <li>Take advantage of offline tools such as NPM, Webpack, and Typescript</li>
      <li>Minimize the amount of learning required</li>
      <li>Keep everything component based</li>
  </ul>
  <p>
    <button attach="back" type="button" class="btn btn-outline-primary">Home</button>
    <button attach="next" type="button" class="btn btn-outline-primary">What</button>
  </p>
</div>
      `);
      const router = this.router;
      this.attachments.back.addEventListener('click', () => router.go(router.createUrl(States.HOME)));
      this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.WHAT)));
      return this;
    }
  }
