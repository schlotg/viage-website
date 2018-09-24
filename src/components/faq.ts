import { Component } from 'viage';
import { States } from './app';

declare function prettyPrintOne(code: string, lang: string): string;
declare var PR: any;
const pp = PR.prettyPrintOne;

const code1 =
`
  new CopyWebpackPlugin([
    { from:'node_modules/@fortawesome/fontawesome-free/css/all.css', to: 'css/all.css' },
    { from:'node_modules/@fortawesome/fontawesome-free/webfonts/*', to: 'webfonts/',  flatten: 'true'},
  ])
`;
const code2 =
`
import { Component }from 'viage';
import * as logo from '../logo.png';

  export class Toolbar extends Component {
    constructor() {
      super('toolbar');
    }
    init() {
      this.setHTML(\`
        &#60div class="toolbar"&#62
          &#60img src="\${logo.default}" width="32px"/&#62
        &#60/div&#62
      \`);
      return this;
    }
  }
`;


  export class Faq extends Component {
    constructor() {
      super('faq');
    }
    init() {
      this.setHTML(`
    <div class="page-header">
      <h1 style="text-align: center">FAQ</h1>
    </div>
    <div class="container">
      <h2>How do I update Viage?</h2>
      <p>
        In the project that you want to update it in, type the following:
        <pre class="code">${pp('npm install --save-dev viage', 'bsh')}</pre>
      </p>
      <h2>How do I update the Viage CLI?</h2>
      <p>
        From any command line, type the following:
        <pre class="code">${pp('npm install -g viage-cli', 'bsh')}</pre>
      </p>
      <h2>How do I add a simple server, so I can test release builds without deploying?</h2>
      <p>
        Viage uses the webpack development server for development. This get's launched with the 'npm run start' command.
        Viage CLI projects also already come with a server to test relese builds. Just type:
        <pre class="code">${pp('npm run build\nnpm run serve', 'bsh')}</pre>
      </p>
      <h2>How do I add a Linter?</h2>
      <p>
        Open a command line in your project and type:
        <pre class="code">${pp('npm run build\nnpm run serve', 'bsh')}</pre>
        Add the following to your package.json scripts section:
        <pre class="code">${pp(`"lint": "tslint -c tslint.json 'src/**/*.ts'"`, 'js')}</pre>
      </p>
      <p>
        Now whenever you want to lint type:
        <pre class="code">${pp('npm run lint','bsh')}</pre>
      </p>
      <h2>How do I change the favicon?</h2>
      <p>Replace the favicon.png file in the src folder with your own 32x32 png image with the same name</p>
      <h2>How do I add Font Awesome to a Viage project?</h2>
      <p>
        Open a command line in your project and type:
        <pre class="code">${pp('npm install --save-dev @fortawesome/fontawesome-free', 'bsh')}</pre>
      </p>
      <p>
        Add the following to index.html somewhere in the head:
        <pre  class="code">${pp('&#60link rel="stylesheet" href="css/all.css"&#62', 'html')}</pre>
      </p>
      <p>
        Install the webpack-copy plugin:
        <pre class="code">${pp('npm install --save-dev copy-webpack-plugin', 'bsh')}</pre>
      </p>
      <p>
        Now modify the webpack.common.js file to copy the appropriate font files to the dest folder. In production you will have to serve the font awesome assets that in the dist folder.
        At the top of the file add:
        <pre class="code">${pp("const CopyWebpackPlugin = require('copy-webpack-plugin');", 'js')}</pre>
      </p>
      <p>
        Under plugins add:
        <pre class="code">${pp(code1, 'js')}</pre>
      </p>
      <p>
        Launch the app using npm run start or npm run build
      </p>
      <h2>How do I add a webfont to Viage?</h2>
      <p>
        I am using examples from <a href="https://fonts.google.com/">https://fonts.google.com/</a>
      </p>
      <p>
        You have the choice of adding an import to the index.css style sheet:
        <pre class="code">${pp("@import url('https://fonts.googleapis.com/css?family=Gaegu');", 'js')}</pre>
      </p>
      <p>
        or you can add a style link in index.html. Usually somewhere under the head tag:
        <pre class="code">${pp('&#60link href="https://fonts.googleapis.com/css?family=Gaegu" rel="stylesheet"&#62', 'html')}</pre>
      </p>
      <p>Follow the Font's directions for styling specific elements using the Font.</p>
      <h2>How do I add Bootstrap to a Viage project?</h2>
      <p>
        You can of course just add the files to index.html as outlined in <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">here</a>.
        If you want to embedd the code within bundle.js then do the following:
      </p>
      <p>
        Open a command line in your project and type:
        <pre class="code">${pp('npm install --save-dev jquery bootstrap', 'bsh')}</pre>
      </p>
      <p>
        Add the following lines to the top of index.ts:
        <pre class="code">${pp(`import 'bootstrap/dist/css/bootstrap.min.css';\nimport 'jquery/dist/jquery.min.js';\nimport 'bootstrap/dist/js/bootstrap.bundle.js';`, 'js')}</pre>
      </p>
      <h2>How do I add a Javascript Library to a Viage project?</h2>
      <p>
        If it is hosted publically you can simply add a script tag in src/index.html . Example for jquery:
        <pre class="code">${pp('&#60script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"&#62&#60/script&#62', 'html')}</pre>
      </p>
      <p>
        If you want to embed the library into the bundle.js file, find the NPM module for the library, and in a console in the projects
        directory type:
        <pre class="code">${pp('npm install --save-dev &#60name of the npm library module&#62', 'bsh')}</pre>
        <i>Where &#60name of the npm library module&#62 is the npm module name. Example: jquery</i>
      </p>
      <p>
        Next, import the file so that it will be bundled into bundle.js. Add the following line to index.ts:
        <pre class="code">${pp(`import 'jquery/dist/jquery.min.js';`, 'js')}</pre>
      </p>
      <h2>How do I add an Image to a Viage Project</h2>
      <p>
        Images can be loaded and bundled into bundle.js. When using the url-loader, if the image is less than 8k it is bundled and inlined
        using base64 encoding. If the image is bigger than 8K then it is hashed, renamed to the hash, and copied to to dist directory.
        References to that image in index.css files will be automatically altered to match the hashed file name.
        For Examples on how to do this see the <a href="https://github.com/schlotg/viage-shopping-list">Viage Shopping List Demo app</a>
      </p>
      <h5>Here are several ways you can get images into your Viage App:</h5>
      <ul>
        <li>
          <p>
            Specify the image in your HTML just like normally would. This will cause the browser to load it and you will get no benefits
            from the url-loader. However you will need to add some mechanism to copy the file into the dist directory on builds.
            Webpack provides a <a href="https://webpack.js.org/plugins/copy-webpack-plugin/">file-copy-plugin</a> to do just that.
            It will need to be installed and configured.
          </p>
          <i>Note that links to assets already served from another server will just work</i>
        </li>
        <li>
          <p>
            Reference the file in index.css and add it to a style that can be applied to elements that need the image:
            <pre class="code">${pp('.logo-img {\n   background-color: url("images/logo.png");\n}', 'css')}</pre>
          </p>
          <p>
            In this case the images/logo.png will be automatically grabbed by the url loader and either inlined or copied to the
            dist folder with a hashed name. The references to this file in index.css will be updated to either the inlined file or
            to the new hashed name.
          </p>
        </li>
        <li>
          <p>
            Inject images into dynamically generated components directly. This is necessary when using images directly in a component's
            HTML strings. To make this work, import the image at the top of the file and then use the imported reference in the HTML
            string. In the example below, logo.png is imported into a variable called logo. logo is then used as a template parameter
            and assigned to the src attribute in an HTML img tag.
            <pre class="code">${pp(code2, 'js')}</pre>
          </p>
        </li>
      </ul>
      <p>
        If you need to adjust the image inlining setpoint, it can be found in webpack.common.js at this line:
        <pre class="code">${pp(`test: /\.(png|svg|jpg|gif)$/i,\nuse: [ { loader: 'url-loader', options: { limit: 8192 } } ]`, 'js')}</pre>
      </p>
      <p>
        In this case everything below 8K is inlined and everything above will copied to the build directory and referenced.
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
