import { Component } from 'viage';
import { States } from './app';

declare function prettyPrintOne(code: string, lang: string): string;
declare var PR: any;
const pp = PR.prettyPrintOne;

const code1 =
`
updateList(){
  // remove any components
  this.clearComponents();
  // clear out any existing inner HTML
  this.attachments.list.innerHTML = '';
  ShoppingListService.forEach(e => {
    this.createComponent(ShoppingListElement).init(e)
      .attach(this.attachments.list);
  });
}
`;

const code2 =
`
export class Listener {
  private cb: any;
  private e: HTMLElement;
  private event: string;
  constructor (e: any, event: string, cb: any) {
    this.cb = cb;
    this.e = e as HTMLElement;
    this.event = event;
    this.e.addEventListener(event, cb);
  }
  remove() {
    if (this.e) {
      this.e.removeEventListener(this.event, this.cb);
      this.e = null;
      this.cb = null;
    }
  }
}
`;
const code3 =
`
import { ShoppingList } from './shopping-list';
import { ShoppingListAdd } from './shopping-list-add';
import { createRouter, RouterType, StateType } from 'viage';
const router = createRouter('main', this.attachments.portal, RouterType.HASH);
router.addStates([
  { name: 'home', component: ShoppingList,  type: StateType.DEFAULT },
  { name: 'add', component: ShoppingListAdd,  type: StateType.NORMAL },
  { name: 'edit', component: ShoppingListAdd,  type: StateType.NORMAL },
]);
router.start();
`;

const code4 =
`
export interface State {
  name: string;
  component: any;
  type: 'DEFAULT' | 'NORMAL';
}
`;
const code5 =
`
const homeUrl = this.router.createUrl<void>(States.HOME);
const editUrl = this.router.createUrl<Id>(States.EDIT, {id: this.item._id});
`;

const code6 =
`
const router = getRouter('main');
const homeUrl = router.createUrl('home');
router.go(homeUrl);
`;

const code7 =
`
// add a handler for router state changes
router.setStateChangedCallback((stateInfo: StateInfo) => {
  return new Promise((resolve) => {
    console.log('Router State Change is about to happen', stateInfo);
    resolve(); // actually trigger the state change
    console.log('Router State Change just happened');
  });
};
`;

const code8 =
`
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-type" content="text/html; charset=utf-8"/>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>
  <body>
    <page>
      <p style="text-align: center" id="viage-loading">Loading....</p>
    </page>
    <script>
      window.addEventListener('load', () => {
        setTimeout(() => {
          const e = document.querySelector('#viage-loading');
          if (e) {
            e.textContent = 'This page is not supported by your browser. Please consider using Safari, Firefox, Edge, or Chrome';
          }
        }, 1000);
      });
    </script>
  </body>
</html>
`;

const code9 =
`
import { App } from './components/app';
import './index.css';
import { isCompatible } from 'viage';

export let app: App;
if (isCompatible()) {
    app = new App();
}
`;

  function escapeHtml(str: string){
    return str.replace(/\</g, '&#60').replace(/\>/g, '&#62');
  }

  export class Api extends Component {
    constructor() {
      super('api');
    }
    init() {
      this.setHTML(`
        <div class="page-header">
          <h1 style="text-align: center">API</h1>
        </div>
        <div class="container">
          <h2>Components</h2>
          <p>
            All components need to derive off of the Component class. This class gives you the functionality below via inheritance.
          </p>
          <p>
            Some usage notes:
            <ul>
              <li>
                The base constructor must have a tag name passed into it. A DOM element by this name is constructed and stored in
                <b>this.e</b>
              </li>
              <li>
                Implement and use a <i>init()</i> function to configure your components. This is a great place to pass in configuration data, etc...
                The router will use the init function to pass in state data when a state change is detected. The constructors should have minimal
                configuration happening in them
              </li>
              <li>
                Use the attach method to attach a component to an existing DOM element
              </li>
              <li>
                Use the attach attribute in your HTML to automatically to attach elements to a component. They will show up in <b>this.attachments</b>
                which is a map with the attach name as the key
              </li>
              <li>
                Use the <b>createComponent()</b> method to create and automatically add components to a component. Added Components will show up
                in <b>this.components</b> which is a map with the component name as a key
              </li>
              <li>
                Use <b>clearComponents()</b> or <b>destroyComponent()</b> to automtically remove a component and call release on it
              </li>
              <li>
                Use <b>addServiceListener()</b> and <b>removeListener()</b> to add listeners to a service. This takes care of unregistering the event
                listeners on release or remove. The listeners are stored in the array <b>this.listeners</b>
              </li>
              <li>
                Release will clean up all the attached listeners, components, and attachements
              </li>
            </ul>
          </p>
          <h4>Element</h4>
          <p>
            Each component has a element whose named gets passed down through the constructor. You can access it via <b>this.e</b>.
            A call to <b>attach()</b> will append this element into the element to be attached to.
          </p>
          <h4 class="function">addServiceListener<A extends Service>(service: A, event: string, cb: any)</h4>
          <p>
            This adds an event listener to a service. This will automatically be removed when the component gets destroyed.
            This uses a intermediate class that manages the intricacies of the <b>addEventListener()</b> API and its difficulties with
            classes and arrow functions.
            <pre class="code">${pp(`this.addServiceListener(ShoppingListService, 'update', () => this.updateList());`, 'js')}</pre>
            The resultant intermediate class is stored in <b>this.serviceListeners</b>
          </p>
          <h4 class="function">attach(attachPoint: HTMLElement | string, replace?: boolean)</h4>
          <p>
            Allows a component to attach itself to another element. You can pass in the element to attach to, or a selector string.
            The optional replace parameter replaces the inner contents of an element, otherwise it is appended to the end.
          </p>
          <h4 class="function">clearComponents()</h4>
          <p>
            Clears out all the created Components
          </p>
          <h4 class="function">protected clearHTML()</h4>
          <p>
            Sets the HTML of the component to an empty string and clears out the attachments member
          </p>
          <h4 class="function">createComponent<A extends Component>(c: new () => A, name?: string): A</h4>
          <p>
            This function creates a child component and automatically adds it to <b>this.components</b> . If the optional name
            parameter is not used then an id is created and the it is added to the <b>this.components</b> object using the id as
            a key. If the owning class has a router configured, it is assigned to class created using this function.
            <pre class="code">${pp(code1, 'js')}</pre>
          </p>
          <h4 class="function">destroyComponent(name: string)</h4>
          <p>
            Destroy a created Component by name
          </p>
          <h4 class="function">forEachAttachments(cb: forEachCB)</h4>
          <p>
            This is a helper function that allows you to apply a callback function on each of the attachments
          </p>
          <h4 class="function">forEachComponents(cb: forEachCB)</h4>
          <p>
            This is a helper function that allows you to apply a callback function on all of the child components
          </p>
          <h4 class="function">getId(): string</h4>
          <p>
            Returns the unique ID associated with this component. Every component has its own unique ID that is generated
            when it is created.
          </p>
          <h4 class="function">release()</h4>
          <p>
            This function is called by the system and can be called manually to destroy and cleanup the component. This will
            release any references to other components and call a destroy function in the class if it exists.
          </p>
          <h4 class="function">removeListener(target: Listener)</h4>
          <p>
            This takes a listener, calls remove on it and removes this instance from the list of listneners in the component.
          </p>
          <h4 class="function">protected setHTML(html: string)</h4>
          <p>
            This will replace the HTML associated with the components element. It will add any elements in the HTML that have
            the attach attribute and add them to this.attachments. As an example if the HTML contained a string like this:
            <pre class="code">${pp('&#60div attach="container"&#62&#60/div&#62', 'html')}</pre>
            <b>this.attachments.container</b> will contain the element specified above.
          </p>
          <h2>Service</h2>
          <p>
            All services must derive off of the Service base class. This class gives you the following functionality:
          </p>
          <h4 class="function">addEventListener(event: string, cb: any) : Listener</h4>
          <p>
            The Service base class creates a private element that lets listeners attach. This function adds an event listener
            to an event. It returns the intermediate listener class. If using a component to listen to a service, user the components
            <b>addServiceListener()</b>
          </p>
          <h4 class="function">dispatchEvent(_event: string, data: any)</h4>
          <p>
            Dispatch event lets you dispatch a custom event with data to all your listeners
          </p>
          <h2>Listener</h2>
          <p>
            The intermediate listener class takes care of all the intricacies of the addEventListener API.
            It is hard to remove a event listener once it is added if you use a arrow function or a class method.
            This class is not meant to be used directly and is used by the Service listeners. Calling <b>remove()</b>
            on this returned class removes the event listener. The class looks likes this:
            <pre class="code">${pp(code2, 'js')}</pre>
          </p>
          <h2>Router</h2>
          <p>
            Viage comes with a built in Router. It can be configured as a Hash, Location, or Standalone router. It is small but very functional.
            Routers should be created up front in app.ts. Any component that needs access can get one by name.
          </p>
          <h4>Types</h4>
          <ul>
            <li>
              <b>Hash:</b> A Hash Router usese the # symbol in front of a route in a URL imitating anchor links. This prevents the browser
              from actually loading a new page when the the location url has changed. This type of router is great for standalone apps that
              need to work without network connectivity. Once loaded, the app does not need to access the network except to make REST API
              calls if needed.
            </li>
            <li>
              <p>
                <b>Location:</b> A location Router actually reloads the location from the server. While this might seem like a horrible waste of
                network bandwidth, in reality its pretty small. What actually happens is a request goes out for the index.html. This file is small
                in a Viage app. From there it will try to load the Viage bundle.js and any asset files. The URLs for these assets are unchanged,
                and therefore the server should respond with a 304 (Not Modified) and the browser will used the cached versions of these files.
              </p>
              <p>
                When the app loads up and initializes, the router inspects the current URL and makes the appropriate state changes internally.
                In some other Location Router implementations, the route information is formatted something like this: <i class="link">https://foo.com/page1/foo</i>
                and <i class="link">https://foo.com/page2/foo</i>. This type of URL formatting is definetly easier to read, but it relies on the server being
                configured to always return back index.html if it can't find a file at that path. If your website contains several different web
                apps each with their own router and all at the same domain, it gets difficult to configure the server to make everything work properly.
              </p>
                Viage sacrifices URL readability for easy deployment. The router state is encoded as a parameter along with any the data needed for
                the state. A Viage location router URL looks something like: <i class="link">https://home.html?/bar;d=5</i>. This makes it easy to have have another
                Viage app at the same domain that deals with user information: <i class="link">https://user.html?/foo;d=7</i> and requires minimal server configuration.
              </p>
            </li>
            <li>
              <b>Standalone:</b> A Standalone Router is a great way to manage content in a subpane that is active within one of your main router states.
              It does not use the built in location mechanisms of the browser and the Router must be called directly to perform state changes.
              This is done through the <b>go()</b> and <b>back()</b> function calls.
            </li>
          </ul>
          <h4>Basic Operation</h4>
          <ul>
            <li>
              A Router is created and configured by name using <b>createRouter()</b>. This should probably be done in app.ts.
              Other components can access a router by calling the <b>getRouter()</b> function and passing in a name. You can trigger a route or
              state change for Location and Hash Routers by clicking links, using the browsers back and forward buttons, and by calling
              <b>go()</b> and <b>back()</b>. Standalone Routers can only use <b>go()</b> and <b>back()</b>.
            </li>
            <li>
              You can only have one Hash or Standalone Router at a time because the take over the browsers location and history object,
              but you can have as many Standalone routers as needed.
            </li>
            <li>
              Urls to trigger router state changes should be generated using the <b>createUrl()</b> function.
              This eliminates any guessing or incorrect generation of URLS. This function automatically takes in account the type of Router
              being used and also makes your code more immune to any future Router code changes.
            </li>
            <li>
              States are configured with a name and a component associated with the State. When a state change is triggered,
              a component is created and configured with the state's data passed into the newly created component's contructor.
              This component is then attached to the Router's portal and renders its content into it.
            </li>
              A Portal is simply a DOM element that the Router will render the current state into and is set when the Router is configured.
            <li>
              After an App is loaded and the Routers are configured, <b>start()</b> should be called on the router.
              This tells the router to grab the app's current URL from location.href, or set the default if a Standalone router,
              and then make the appropriate state change based on it's contents.
            </li>
            <li>
              Router's should be configured with a default state to enter if the URL doesn't make sense or when it doesn't
              contain and state information.
            </li>
          </ul>
          <h2>Router API</h2>
          <h4 class="function">createRouter(name: string, portal: HTMLDivElement | string, type: RouterType)</h4>
          <p>
            This creates a router using the name passed in. The portal is an HTML element that the router will render into and can be an
            actual element instance or a CSS selector for one.
            <pre class="code">${pp(code3, 'js')}</pre>
            When the state is activated, a new Component is allocated, configured with the router (ie this.router will be set to the
            router that created it), and then if it exists, init will be called with the data associated with the URL.
          </p>
          <h4 class="function">getRouter(name: string): Router</h4>
          <p>
            Gets a previously created router by name. This allows any component to get any created router.
          </p>
          <h4 class="function">addStates(states: State[])</h4>
          <p>
            Where state is defined as:
            <pre class="code">${pp(code4, 'js')}</pre>
            This function configures the router with its states. <b>name</b> is the url, <b>component</b> is the component that will be
            rendered into the portal. The type is either 'DEFAULT' or 'NORMAL'. THere can only be one DEFAULT state and the others must
            be NORMAL states.
          </p>
          <p>
            Use the <b>createUrl()</b> function to create URLs and embed data in them. Any JSON-able data can be used to construct the URL.
          </p>
          <p>
            See the Shopping List Demo for more details.
          </p>
          <h4 class="function">back()</h4>
          <p>
            This function goes back to the previous router state. If there was not a previous state then it goes to the default state.
          </p>
          <h4 class="function">clearStateChangedCallback()</h4>
          <p>
            Clears a state change callback if set. To set use <b>setStateChangedCallback()</b>
          </p>
          <h4 class="function">clearStates()</h4>
          <p>
            Clears out all the existing states in a router.
          </p>
          <h4 class="function">createUrl<T>(state: string, data?: T): string</h4>
          <p>
            This creates a URL out of a state string and a JSON-able data parameter. The T parameter is the data type being passed in.
            <pre class="code">${pp(code5, 'js')}</pre>
          </p>
          <h4 class="function">getName(): string</h4>
          <p>
            Returns the Router's name.
          </p>
          <h4 class="function">getType(): string</h4>
          <p>
            Returns the Router's type.
          </p>
          <h4 class="function">go(url: string)</h4>
          <p>
            This function allows manual triggering of a state change. Use the **createUrl()** function to generate the URL.
            <pre class="code">${pp(code6, 'js')}</pre>
            For Location and Hash routers, you can also trigger a state change by using setting links, setting location.href,
            by using the back and forward browser buttons, and by calling <b>back()</b>.
          </p>
          <h4 class="function">removeState(name: string)</h4>
          <p>
            This function allows you to remove a state by name.
          </p>
          <h4 class="function">setStateChangedCallback(cb: StateChangedCallback)</h4>
          <p>
            This function allows you to install a callback that gets fired everytime there is a state change. The callback
            should return a promise and when the callback is done doing a task it will trigger the state change by calling
            resolve on the returned promise. This allows you to do animations between state changed and debug router state changes.
          </p>
          <p>
            <b>StateChangedCallback</b> has the following prototype:
            <pre class="code">${pp('export type StateChangedCallback = (stateInfo: StateInfo) => Promise&#60void&#62;', 'js')}</pre>
            Here is an example of its use:
            <pre class="code">${pp(code7, 'js')}</pre>
            For more information see the Viage Shopping List tutorial
          </p>
          <h4 class="function">start()</h4>
          <p>
            Tells a router to activate itself and start routing. This should be called as soon as the Router is configured.
          </p>
          <h2>Misc</h2>
          <h4 class="function">isCompatible(): boolean</h4>
          <p>
            This is a quick and dirty function to detect if the browser is IE. While not an exhaustive compatability check,
            there are very few browsers in use that are not IE, Edge, Safari, Chrome, Firefox or their mobile counterparts.
            One of the design considerations to keep this library small, is to ignore IE support. The Viage  Cli creates
            template projects that has code that looks like this:
          </p>
          <h6>index.html</h6>
          <pre class="code">${pp(escapeHtml(code8), 'html')}</pre>
          <h6>index.ts</h6>
          <pre class="code">${pp(code9, 'js')}</pre>
          <p>
            This code displays Loading... if the app takes a while to execute and then displays a warning message if the browser
            is IE or if a exception was thrown during the initialization process. When the App component is executed it renders
            into the <b>page</b> element replacing the Loading... message.
          </p>
          <p>
            This is exposed and kept simple so that if you need a more exhaustive browser compatability check, you can easily
            implement one. If you want to remove the check all together, that should be easy enough to do as well.
          </p>
          <p>
            <button attach="back" type="button" class="btn btn-outline-primary">Getting Started</button>
            <button attach="next" type="button" class="btn btn-outline-primary">Tutorial</button>
          </p>
        </div>
      `);
      const router = this.router;
      this.attachments.back.addEventListener('click', () => router.go(router.createUrl(States.GETTING_STARTED)));
      this.attachments.next.addEventListener('click', () => router.go(router.createUrl(States.TUTORIAL)));
      return this;
    }
  }
