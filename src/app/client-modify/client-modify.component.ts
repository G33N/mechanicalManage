import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// MODELS
import { Client } from '../models/client';
// SERVICES
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-modify',
  templateUrl: './client-modify.component.html',
  styleUrls: ['./client-modify.component.scss']
})

export class ClientModifyComponent implements OnInit {
  client = {} as Client;
  client$: FirebaseObjectObservable<Client>;
  clientKey: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private clientService: ClientService
  ) {
    this.read(this.getRouteParams());
  }

  ngOnInit() {
  }

  update(client) {
    this.clientService.update(client);
    this.router.navigate([`/content/client/read`]);
  }
  read(key) {
    this.client$ = this.clientService.readByKey(key);
    console.log(this.client$.subscribe(snapshot => {
      this.client = snapshot;
    }));
  }
  getRouteParams() {
    // READ ROUTE PARAMS
    let param: any;
    this.route.params.subscribe((params: Client) => param = params);
    this.clientKey = param.key;
    return param.key;
  }
}
