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
  selector: 'app-category-modify',
  templateUrl: './category-modify.component.html',
  styleUrls: ['./category-modify.component.scss'],
  providers: [ CategoryService ]
})
export class CategoryModifyComponent implements OnInit {
  category = {} as Category;
  categoryUpdate= {} as Category;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private catService: CategoryService
  ) {
    // READ ROUTE PARAMS
    this.route.params.subscribe((params: Category) => this.category = params);
  }

  ngOnInit() { }

  update(category) {
    this.catService.update(category, this.categoryUpdate);
    this.router.navigate([`/content/category/read`]);
  }
}
