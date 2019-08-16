import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WebsiteRoutingModule } from './website-routing.module';
import * as components from './component';
import { UtilsModule } from '../utils/utils.module';
import { UserService } from './services';
import { WebsiteComponent } from './component/website/website.component';

@NgModule({
  declarations: [
    WebsiteComponent, 
    components.HeaderComponent, 
    components.FooterComponent, 
    components.MainComponent, 
    components.DashboardComponent, 
    components.ProfileComponent, 
    components.ProfileConfigComponent, 
    components.SideBarComponent, 
    components.SideBarToogleComponent, 
    components.ContactComponent,
    components.LoginComponent,
    components.ForgotPasswordComponent,
    components.RegistrationComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    UtilsModule,
    FormsModule
  ],
  exports:[WebsiteComponent],
  providers:[UserService]
})
export class WebsiteModule { }
