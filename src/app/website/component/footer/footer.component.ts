import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/utils/services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit() {
  }

  loggedIn():boolean{
    return this.authenticationService.isLoggedIn();
  }

}
