import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';

import { AuthService } from './../services/auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  email: string;
  password: string;
  authState: any;
  constructor(
    private afAuth: AngularFireAuth,
    private auth: AuthService,
    private router: Router
  ) {
    // This should be repleace the this.authenticated, this don't works
    this.authState = afAuth.authState;
    this.authState.subscribe((user: firebase.User) => {
        this.authState = user;
        if (user) {
          this.router.navigate(['/content']);
        }
    });
  }

  ngOnInit() {
  }

  login() {
    this.auth.emailLogin(this.email, this.password);
  }


}
