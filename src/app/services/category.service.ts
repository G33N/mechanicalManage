import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Category } from '../models/category';
import { AuthService } from './../services/auth.service';


@Injectable()
export class CategoryService {
  category = {} as Category;
  category$: FirebaseListObservable<any[]>;
  currentUser: any;
  constructor(
    private db: AngularFireDatabase,
    private router: Router,
    private auth: AuthService
  ) {
    this.currentUser = this.auth.currentUserId;
  }

  create(category: Category) {
    // read item list
    this.read();
    // push new item
    this.category$.push(category);
  }

  read() {
    this.category$ = this.db.list(`categories/${this.currentUser}`);
    return this.category$;
  }

  update(category, data) {
    this.db.object(`categories/${this.currentUser}/${category.key}`).set(data);
  }

  delete(category) {
    // delete item
    this.category$.remove(category.$key);
  }

}
