import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as component from './component';
import { AuthGuard } from '../utils/services';

const routes: Routes = [
  //Admin Secured
  {
    path: '',
    component: component.AdminComponent,
    canActivate: [AuthGuard],
    data: {
      redirectTo : '/admin/login'
    },
    children: [
      {path:'user/:id', component: component.MyProfileComponent},
      {path:'changepassword', component: component.ChangePasswordComponent},
      {path:'report', component:component.ReportComponent},
      {path:'users', component:component.UsersComponent},
      {path:'advertisers', component:component.AdvertisersComponent},
      {path:'visitors', component:component.VisitorsComponent},
      {path:'posting', component:component.PostingComponent},
      {path:'flags', component:component.FlagsComponent},
      {path:'problem-submissions', component:component.ProblemsubmissionsComponent},
      {path:'suggestions', component:component.SuggestionsComponent},
      {path:'admin-roles', component:component.AdminrolesComponent},
      {path:'analyst', component:component.AnalystComponent}
    ]
  },
  //Admin Public
  {
    path:'',
    component: component.AdminComponent,
    children:[
      {path:'login', component:component.LoginComponent},
      {path:'forgot', component:component.ForgotPasswordComponent},
      {path:'forgot/:code', component:component.ForgotPasswordComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
