import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from './app.component';

const FIREBASECONF ={
  apiKey: "AIzaSyCV7EKKtFnHXZ1Ia0MhlDpeJcIvhzhU2zc",
    authDomain: "shibaadvice.firebaseapp.com",
    databaseURL: "https://shibaadvice.firebaseio.com",
    projectId: "shibaadvice",
    storageBucket: "shibaadvice.appspot.com",
    messagingSenderId: "388090866362"

}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(FIREBASECONF),
    // AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
