import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
// MDBootstrap
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// ROUTER
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { ClientComponent } from './client/client.component';
import { WorkOrderComponent } from './work-order/work-order.component';
import { StockComponent } from './stock/stock.component';
import { CategoryComponent } from './category/category.component';
import { EmployeesComponent } from './employees/employees.component';
// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryModifyComponent } from './category-modify/category-modify.component';
import { CategoryCreateComponent } from './category-create/category-create.component';
// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDpvTQlzA5G5zhXjFuZvh2JsvMLbDwIWQM',
  authDomain: 'mechanicalmanage.firebaseapp.com',
  databaseURL: 'https://mechanicalmanage.firebaseio.com/',
  storageBucket: 'gs://mechanicalmanage.appspot.com/',
  messagingSenderId: ''
};

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    ClientComponent,
    WorkOrderComponent,
    StockComponent,
    CategoryComponent,
    EmployeesComponent,
    CategoryListComponent,
    CategoryModifyComponent,
    CategoryCreateComponent,
  ],
  imports: [
    BrowserModule,
    // THIS MODULE IS REQUIRED BY NGMODEL
    FormsModule,
    routes,
    MDBBootstrapModule.forRoot(),
    // FIREBASE
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
    schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
