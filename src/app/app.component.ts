import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShibAdvice!';
  home_img = "http://cdn.shibe.online/shibes/f85fd66a23fc66754b68f2fac431e2fd0f773293.jpg"
  loged=false;

  Login(){
    alert('Logueado. Bienvenido')
    this.loged=true;
  }
}
