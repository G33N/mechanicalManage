import { Injectable } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
  category = {} as Category;
  category$: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router) { }

  create(category: Category) {
    // read item list
    this.read();
    // push new item
    this.category$.push(category);
  }

  read() {
    // this.category$ = this.db.list(`category$/${this.currentAuth.uid}`); // when I update the login use this line
    this.category$ = this.db.list(`categories`);
    return this.category$;
  }

  update(category, data) {
    this.db.object(`categories/${category.key}`).set(data);
  }

  delete(category) {
    // delete item
    this.category$.remove(category.$key);
  }

}
