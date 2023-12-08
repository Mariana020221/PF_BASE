import { Component } from '@angular/core';
//import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(/*private authService: AuthService,*/ private router: Router, private cookieService: CookieService) {}


  logout() {
    //this.authService.logout();
    this.cookieService.delete('authToken');
    this.router.navigate(['/login']);
  }

  carrito(){
    this.router.navigate(['/carrito']);
  }

}
