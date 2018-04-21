import { Component } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from "firebase/app";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  // ,template: `<ul>
  //   <li *ngFor="let item of items | async">
  //     {{ item.name }}
  //   </li>
  // </ul>`
})
export class AppComponent {
  title = 'ShibAdvice!';
  home_img = "http://cdn.shibe.online/shibes/f85fd66a23fc66754b68f2fac431e2fd0f773293.jpg"
  loged=false;
  user: Observable<firebase.User>;

  login(){
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    this.loged=true;
  }

  // items: Observable<any[]>;
  constructor(private afAuth:AngularFireAuth ){
    //this.user = this.afAuth.authState;
  }
  // constructor(db: AngularFirestore) {
  //   this.items = db.collection('items').valueChanges();
  // }
}
