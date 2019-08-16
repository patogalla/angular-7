import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { UtilsModule } from '../utils/utils.module';
import * as component from './component';

import { AdminUserService } from '../utils/services';
@NgModule({
  declarations: [
    component.MainComponent, 
    component.HeaderComponent, 
    component.AdminComponent, 
    component.LoginComponent, 
    component.ReportComponent, 
    component.UsersComponent, 
    component.AdvertisersComponent, 
    component.VisitorsComponent, 
    component.PostingComponent, 
    component.FlagsComponent, 
    component.ProblemsubmissionsComponent, 
    component.SuggestionsComponent, 
    component.AdminrolesComponent, 
    component.AnalystComponent, 
    component.ForgotPasswordComponent, 
    component.ChangePasswordComponent, 
    component.MyProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    UtilsModule
  ],
  exports:[component.AdminComponent],
  providers:[AdminUserService]
})
export class AdminModule { }
