import { Component, OnInit } from '@angular/core';
// ROUTER
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Stock } from './../models/stock';
// SERVICES
import { StockService } from './../services/stock.service';
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss'],
  providers: [ StockService ]
})
export class StockListComponent implements OnInit {
  stock = {} as Stock;
  stock$: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase, private router: Router, private stockService: StockService) {

    this.read();

  }

  ngOnInit() {
  }

  read() {
    this.stock$ = this.stockService.read();
  }
  update(stock) {
    this.router.navigate([`/content/stock/update`, { key: stock.$key }]);
  }
  delete(stock) {
    this.stockService.delete(stock);
  }

}
