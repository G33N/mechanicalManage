import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Client } from '../models/client';
// SERVICES
import { ClientService } from './../services/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.scss']
})

export class ClientCreateComponent implements OnInit {
  client = {} as Client;
  client$: FirebaseListObservable<Client[]>;
  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private clientService: ClientService
  ) { }

  ngOnInit() {
  }

  create(client) {
    this.clientService.create(client);
    this.router.navigate([`/content/client/read`]);
  }

}
