import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/utils/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit() {
    console.log("Init header-bar-admin")
  }

  loggedIn(): boolean{
    return this.authenticationService.isLoggedIn();
  }

  logout(){
    this.authenticationService.logout();
    this.router.navigate(['admin/login']);
  }

}
