import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Category } from '../models/category';
import { Stock } from './../models/stock';
// SERVICES
import { CategoryService } from './../services/category.service';
import { StockService } from './../services/stock.service';

@Component({
  selector: 'app-stock-create',
  templateUrl: './stock-create.component.html',
  styleUrls: ['./stock-create.component.scss']
})
export class StockCreateComponent implements OnInit {
  category = {} as Category;
  stock = {} as Stock;
  category$: FirebaseListObservable<Category[]>;
  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private catService: CategoryService,
    private stockService: StockService
  ) {
    this.readCategories();
  }

  ngOnInit() {
  }

  create(stock) {
    this.stockService.create(stock);
    this.router.navigate([`/content/stock/read`]);
  }

  readCategories() {
    this.category$ = this.catService.read();
  }
}
