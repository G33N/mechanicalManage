import { Component, OnInit } from '@angular/core';
// FIREBASE
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// MODELS
import { Category } from '../models/category';
// SERVICES
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
  providers: [ CategoryService ]
})
export class CategoryCreateComponent implements OnInit {
  category = {} as Category;
  categories: FirebaseListObservable<any[]>;
  notification: { message: string, type: string };
  constructor(private db: AngularFireDatabase, private catService: CategoryService) {
    this.read();
  }
  ngOnInit() {
  }

  read() {
    this.catService.read();
  }

  async create(category) {
    try {
      await this.catService.create(category);
      this.notification = {
        message: 'Guardado corectamente',
        type: 'success'
      };
    }catch (e) {
      this.notification = {
        message: 'Error :' + e,
        type: 'danger'
      };
    }
  }

}
