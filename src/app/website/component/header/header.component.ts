import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { AuthenticationService } from 'src/app/utils/services';
import { Router } from '@angular/router';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private router:Router, private authService:AuthService) {
   }

  ngOnInit() {
    console.log('init HeaderBarWebsite');
  }

  loggedIn(): boolean{
    return this.authenticationService.isLoggedIn();
  }

  signOut(): void {
    this.authService.signOut();
  }
  
  logout() {
    console.log('logout')
    this.signOut();
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  

}
