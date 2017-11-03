import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoticeComponent } from './notice/notice.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDpvTQlzA5G5zhXjFuZvh2JsvMLbDwIWQM',
  authDomain: 'mechanicalmanage.firebaseapp.com',
  databaseURL: 'https://mechanicalmanage.firebaseio.com/',
  storageBucket: 'gs://mechanicalmanage.appspot.com',
  messagingSenderId: ''
};

@NgModule({
  declarations: [
    AppComponent,
    NoticeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // Import AngularFireAuthModule to use Authenticacion API
    AngularFireAuthModule,
    // Import AngularFireAuthModule to use database interactions
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
