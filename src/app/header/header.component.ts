import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  authState: any; // this disable the navbar when nobody is logged
  constructor(
    private auth: AuthService,
    private afAuth: AngularFireAuth  ) {
    // This should be repleace the this.authenticated, this don't works
    this.authState = afAuth.authState;
    this.authState.subscribe((user: firebase.User) => {
        this.authState = user;
        if (!user) {
          // this.router.navigate['/welcome'];
        }
    });
  }

  ngOnInit() {
  }

  signOut() {
    this.auth.signOut();
  }

  showUser() {
    console.log(this.authState);
  }
}
