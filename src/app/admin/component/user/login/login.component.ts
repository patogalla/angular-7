import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/utils/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  returnUrl: string;
  loading= false;

  constructor( private authenticationService:AuthenticationService,
               private router: Router,
               private route: ActivatedRoute) { }

  ngOnInit() {
     // reset login status
     this.authenticationService.logout();
     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
   }
  
   login(){
     this.loading=true;
     this.authenticationService.login(this.model.username, this.model.password)
     .subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, e => {
      this.loading = false;
    });
   }

}
