import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Category } from '../models/category';
// SERVICES
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})

export class CategoryListComponent implements OnInit {
  category = {} as Category;
  categories: FirebaseListObservable<any[]>;
  constructor(private db: AngularFireDatabase, private router: Router, private catService: CategoryService) {
    this.read();
  }

  ngOnInit() {
  }
  read() {
    this.categories = this.catService.read();
  }
  update(category) {
    this.router.navigate([`/content/category/update`, { description: category.description, key: category.$key }]);
  }
  delete(category) {
    this.catService.delete(category);
  }
}
