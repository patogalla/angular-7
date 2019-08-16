import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/utils/services';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login-web',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  returnUrl: string;
  loading= false;

  constructor( private authenticationService:AuthenticationService,
               private router: Router,
               private route: ActivatedRoute,
               private authService:AuthService) { }

  ngOnInit() {
     // reset login status
     this.authenticationService.logout();
     // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin';
   }
  
   login(){
     this.loading=true;
     this.authenticationService.loginWebsite(this.model.username, this.model.password)
     .subscribe(data => {
      this.router.navigate([this.returnUrl]);
    }, e => {
      this.loading = false;
    });
   }

   signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

}
