import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { navbarData } from './navbar-data';
import { navbarDataNo } from './navbar-data-no';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  constructor(public authService: AuthService){}


  val : boolean = this.authService.loggedin();
  collapsed: boolean = true;
  navData = navbarData;
  navDataNo = navbarDataNo;
}
