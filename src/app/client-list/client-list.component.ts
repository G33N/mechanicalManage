import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Client } from '../models/client';
// SERVICES
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  client = {} as Client;
  client$: FirebaseListObservable<Client[]>;
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private clientService: ClientService) {
      this.read();
    }

  ngOnInit() {
  }

  read() {
    this.client$ = this.clientService.read();
  }
  update(client) {
    this.router.navigate([`/content/client/update`, { key: client.$key }]);
  }
  delete(client) {
    this.clientService.delete(client);
  }
}
