import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Client } from '../models/client';
import { log } from 'util';
// SERVICES
import { AuthService } from './auth.service';

@Injectable()
export class ClientService {
  client = {} as Client;
  client$: FirebaseListObservable<any[]>;
  currentUser: any;
  constructor(
    private db: AngularFireDatabase,
    private auth: AuthService
  ) {
    this.currentUser = this.auth.currentUserId;
  }

  create(client: Client) {
    // read item list
    this.read();
    // push new item
    this.client$.push(client);
  }

  read() {
    // read all collections in node client
    this.client$ = this.db.list(`clients/${this.currentUser}`);
    return this.client$;
  }

  readByKey(key) {
    // read by key in node client
    let exit: any;
    exit = this.db.object(`clients/${this.currentUser}/${key}`);
    return exit;
  }

  update(client) {
    this.db.object(`clients/${this.currentUser}/${client.$key}`).set(client);
  }

  delete(client) {
    // delete item
    this.client$.remove(client.$key);
  }
}
