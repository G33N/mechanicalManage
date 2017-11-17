import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
// MODELS
import { Stock } from './../models/stock';
import { Category } from './../models/category';
// SERVICES
import { StockService } from './../services/stock.service';
import { CategoryService } from './../services/category.service';

@Component({
  selector: 'app-stock-modify',
  templateUrl: './stock-modify.component.html',
  styleUrls: ['./stock-modify.component.scss']
})
export class StockModifyComponent implements OnInit {
  stock = {} as Stock;
  stock$: FirebaseObjectObservable<Stock>;
  category = {} as Category;
  category$: FirebaseListObservable<Category[]>;
  stockKey: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private stockService: StockService,
    private catService: CategoryService
  ) {
    this.read(this.getRouteParams());
    this.readCategories();
  }

  ngOnInit() {
  }

  read(key) {
    this.stock$ = this.stockService.readByKey(key);
    this.stock$.subscribe(snapshot => {
      this.stock = snapshot;
    });
  }
  readCategories() {
    this.category$ = this.catService.read();
  }
  update(stock) {
    this.stockService.update(stock);
    this.router.navigate([`/content/stock/read`]);
  }

  getRouteParams() {
    // READ ROUTE PARAMS
    let param: any;
    this.route.params.subscribe((params: Stock) => param = params);
    this.stockKey = param.key;
    return param.key;
  }
}
