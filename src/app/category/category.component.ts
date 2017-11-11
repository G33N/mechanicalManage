import { Component, OnInit } from '@angular/core';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Category } from '../models/category'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  category = {} as Category;
  categories: FirebaseListObservable<any[]>;
  categoryDescription: string;
  getAlias: any;
  constructor(public db: AngularFireDatabase) {
  }

  ngOnInit() {
    
  }

}
