import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  form: FormGroup;
  title = 'Seguro Mecanico';
  name = {
    first: 'Seguro',
    second: 'Mecanico'
  };

  constructor(private fb: FormBuilder, private af: AngularFireDatabase) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
    });
  }
  onSubmit() {
    const {email} = this.form.value;
    const date = Date();
    let formRequest = { email, date };
    this.af.list('/messages').push(formRequest);
    this.form.reset();
  }

}
