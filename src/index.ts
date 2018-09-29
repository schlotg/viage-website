import 'code-prettify/loader/run_prettify';
import 'code-prettify/loader/run_prettify';
import { App } from './components/app';
import './index.css';
import { isCompatible } from 'viage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export let app: App;
if (isCompatible()) {
    app = new App();
    app.init();
}
