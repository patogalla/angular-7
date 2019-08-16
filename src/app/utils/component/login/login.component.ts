import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/utils/services';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService, FacebookLoginProvider, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  model:any = {};
  returnUrl: string;
  loading= false;
  user: SocialUser;

  constructor( private authenticationService:AuthenticationService,
               private router: Router,
               private route: ActivatedRoute,
               private authService:AuthService) { }

  ngOnInit() {
    console.log("init login")
     // reset login status
     this.authenticationService.logout();
     this.authService.authState.subscribe((user) => {
        this.user = user;
      });
    // get return url from route parameters or default to '/'
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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

   
   signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then((userData) => {
      //on success
      //this will return user data from google. What you need is a user token which you will send it to the server
      this.authenticationService.loginWithGoogle(userData.idToken).subscribe(data=> {
        this.router.navigate([this.returnUrl]);
      }, e => {
        this.loading = false;
      });
   });
  }


  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
    .then((userData) => {
      //on success
      //this will return user data from google. What you need is a user token which you will send it to the server
      this.authenticationService.loginWithFB(userData.idToken).subscribe(data=> {
        this.router.navigate([this.returnUrl]);
      }, e => {
        this.loading = false;
      });
   });
  }

  signOut(): void {
    this.authService.signOut();
  }

}
