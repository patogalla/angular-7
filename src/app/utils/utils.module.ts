import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";
import * as services from './services';
import * as components  from './component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('776813336896-fmf5r2tpu005b27b52ap9490l386c9h3.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    components.LoginComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SocialLoginModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],
  exports:[
    components.LoginComponent
  ],
  providers:[
    services.AuthenticationService,
    services.PatogallaHttpService,
    services.AuthGuard,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class UtilsModule { }
