export const code1 = `
  import { Service } from 'viage';

  export class ShoppingListService extends Service {
    constructor() {
      super();
    }
  }
  export const shoppingListService = new ShoppingListService ();
`;

export const code2 = `
  export interface Item {
    name: string;
    description: string;
    quantity: number;
    purchased: boolean;
    id?: string; // added by the service
  }
`;

export const code3 = `
  import { Service } from 'viage';

  export interface Item {
    name: string;
    description: string;
    quantity: number;
    purchased: boolean;
    id?: string; // added by the service
  }

  export class ShoppingListService extends Service {
    private list: Item[] = [];
    private lastId = 0;

    // generate a unique id
    private generateId() {
      let id = lastId;
      while (id == lastId) {
        id = Date.now();
      }
      this.lastId = id;
      return id.toString(16);
    }

    constructor() {
      super();
    }
  }
  export const shoppingListService = new ShoppingListService ();
`;

export const code4 = `
  save() {
    if (window.localStorage) {
      window.localStorage.setItem('ShoppingList',
        JSON.stringify(this.list));
    }
  }

  retrieve () {
    if (window.localStorage) {
      const json = window.localStorage.getItem('ShoppingList');
      if (json) {
        this.clear();
        const list = obj.list = JSON.parse(json) || [];
        list.forEach((e: Item) => this.addItem(e));
      }
    }
  }

  addItem(item: Item) {
    item.id = this.generateId();
    this.list.push(item);
    this.save();
  }

  removeItem(id: string) {
    const i = this.list.findIndex(e => e.id === id));
    if (i !== -1) {
      this.list.splice(i, 1);
      this.save();
    }
  }

  getItem(id: string): Item {
    return this.list.find(e => e.id === id));
  }

  forEach(cb: (item: Item, i?: number) => void) {
    this.list.forEach(cb);
  }

  clear() {
    this.list = [];
    this.save();
  }
`;

export const code5 = `
  save() {
    if (window.localStorage) {
      window.localStorage.setItem('ShoppingList',
        JSON.stringify(this.list));
      this.dispatchEvent<Item[]>('update', this.list);
    }
  }
`;

export const code6 = `
  import { Service } from 'viage';

  export interface Item {
    name: string;
    description: string;
    quantity: number;
    purchased: boolean;
    id?: string; // added by the service
  }

  export class ShoppingListService extends Service {
    private list: Item[] = [];
    private lastId = 0;

    // generate a unique id
    private generateId() {
      let id = lastId;
      while (id == lastId) {
        id = Date.now();
      }
      this.lastId = id;
      return id.toString(16);
    }

    constructor() {
      super();
      this.retrieve();
    }

    save() {
      if (window.localStorage) {
        window.localStorage.setItem('ShoppingList',
          JSON.stringify(this.list));
        this.dispatchEvent<Item[]>('update', this.list);
      }
    }

    retrieve () {
      if (window.localStorage) {
        const json = window.localStorage.getItem('ShoppingList');
        if (json) {
          this.clear();
          const list = obj.list = JSON.parse(json) || [];
          list.forEach((e: Item) => this.addItem(e));
        }
      }
    }

    addItem(item: Item) {
      item.id = this.generateId();
      this.list.push(item);
      this.save();
    }

    removeItem(id: string) {
      const i = this.list.findIndex(e => e.id === id));
      if (i !== -1) {
        this.list.splice(i, 1);
        this.save();
      }
    }

    getItem(id: string): Item {
      return this.list.find(e => e.id === id));
    }

    forEach(cb: (item: Item, i?: number) => void) {
      this.list.forEach(cb);
    }

    clear() {
      this.list = [];
      this.save();
    }

  }
  export const shoppingListService = new ShoppingListService ();
`;

