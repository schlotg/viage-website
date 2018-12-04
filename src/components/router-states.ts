import { createRouter, Component, State, Router } from 'viage';
import { Why } from './why/why';
import { Home } from './home/home';
import { Faq } from './faq/faq';
import { Api } from './api/api';
import { RouterPage } from './router/router';
import { TutorialIntroduction } from './tutorial/introduction/introduction';
import { TutorialCreateApp } from './tutorial/create-app/create-app';
import { TutorialComponents } from './tutorial/components/components';
import { TutorialServices } from './tutorial/services/services';
import { TutorialShoppingList } from './tutorial/shopping-list/shopping-list';
import { TutorialShoppingListElement } from './tutorial/element/element';
import { TutorialAddComponent } from './tutorial/add/add';
import { TutorialRouting } from './tutorial/routing/routing';
import { TutorialEditComponent } from './tutorial/edit/edit';
import { TutorialStyling } from './tutorial/styling/styling';
import { TutorialAnimations } from './tutorial/animations/animations';
import { TutorialConclusion } from './tutorial/conclusion/conclusion';
import { What } from './what/what';
import { GettingStarted } from './getting-started/getting-started';

export enum States {
  HOME = 'home',
  WHY = 'why',
  WHAT = 'what',
  GETTING_STARTED = 'getting_started',
  FAQ = 'faq',
  API = 'api',
  ROUTER = 'router',
  TUTORIAL_INTRODUCTION = 'tutorial_introduction',
  TUTORIAL_CREATE_APP = 'tutorial_create_app',
  TUTORIAL_COMPONENTS = 'tutorial_components',
  TUTORIAL_SERVICES = 'tutorial_services',
  TUTORIAL_SHOPPING_LIST_ELEMENT = 'tutorial_shopping_list_element',
  TUTORIAL_SHOPPING_LIST = 'tutorial_shopping_list',
  TUTORIAL_ROUTING = 'tutorial_routing',
  TUTORIAL_ADD_COMPONENT = 'tutorial_add_component',
  TUTORIAL_EDIT_COMPONENT = 'tutorial_edit_component',
  TUTORIAL_STYLING = 'tutorial_styling',
  TUTORIAL_ANIMATIONS = 'tutorial_animations',
  TUTORIAL_CONCLUSION = 'tutorial_conclusion',
};

export const urls: { [index: string]: string } = {};

// create and configure the router
export function initRouter(portal: HTMLElement) {
  const router = createRouter('main', portal, 'HASH');
  const states: State<any>[] = [
    { name: States.HOME, component: Home,  type: 'DEFAULT' },
    { name: States.WHY, component: Why,  type: 'NORMAL' },
    { name: States.WHAT, component: What,  type: 'NORMAL' },
    { name: States.GETTING_STARTED, component: GettingStarted,  type: 'NORMAL' },
    { name: States.FAQ, component: Faq,  type: 'NORMAL' },
    { name: States.API, component: Api,  type: 'NORMAL' },
    { name: States.ROUTER, component: RouterPage,  type: 'NORMAL' },
    { name: States.TUTORIAL_INTRODUCTION, component: TutorialIntroduction,  type: 'NORMAL' },
    { name: States.TUTORIAL_CREATE_APP, component: TutorialCreateApp,  type: 'NORMAL' },
    { name: States.TUTORIAL_COMPONENTS, component: TutorialComponents,  type: 'NORMAL' },
    { name: States.TUTORIAL_SERVICES, component: TutorialServices,  type: 'NORMAL' },
    { name: States.TUTORIAL_SHOPPING_LIST, component: TutorialShoppingList,  type: 'NORMAL' },
    { name: States.TUTORIAL_SHOPPING_LIST_ELEMENT, component: TutorialShoppingListElement,  type: 'NORMAL' },
    { name: States.TUTORIAL_ADD_COMPONENT, component: TutorialAddComponent,  type: 'NORMAL' },
    { name: States.TUTORIAL_ROUTING, component: TutorialRouting,  type: 'NORMAL' },
    { name: States.TUTORIAL_EDIT_COMPONENT, component: TutorialEditComponent,  type: 'NORMAL' },
    { name: States.TUTORIAL_STYLING, component: TutorialStyling,  type: 'NORMAL' },
    { name: States.TUTORIAL_ANIMATIONS, component: TutorialAnimations,  type: 'NORMAL' },
    { name: States.TUTORIAL_CONCLUSION, component: TutorialConclusion,  type: 'NORMAL' },
  ];
  router.addStates(states);
  createUrls(states, router);
  return router;
}

// precreate the urls because none of them take parameters
function createUrls (states: State<any>[], router: Router) {
  states.forEach((state: State<any>) => urls[state.name] = router.createUrl(state.name));
}