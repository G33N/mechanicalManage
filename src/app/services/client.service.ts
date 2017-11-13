import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Client } from '../models/client';
import { log } from 'util';

@Injectable()
export class ClientService {
  client = {} as Client;
  client$: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase) { }

  create(client: Client) {
    // read item list
    this.read();
    // push new item
    this.client$.push(client);
  }

  read() {
    // read all collections in node client
    this.client$ = this.db.list(`clients`);
    return this.client$;
  }

  readByKey(key) {
    // read by key in node client
    let exit: any;
    exit = this.db.object(`clients/${key}`);
    return exit;
  }

  update(client) {
    this.db.object(`clients/${client.$key}`).set(client);
  }

  delete(client) {
    // delete item
    this.client$.remove(client.$key);
  }
}
