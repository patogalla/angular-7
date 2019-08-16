import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as components from './component';
import { AuthGuard } from '../utils/services/auth.guard';
import { WebsiteComponent } from './component/website/website.component';

const routes: Routes = [
  {
    path:'',
    component:WebsiteComponent,
    canActivate:[AuthGuard],
    data: {
      redirectTo : '/login'
    },
    children:[
      {path:'dashboard', component: components.DashboardComponent},
      {path:'profile', component:components.ProfileComponent},
      {path:'profile-conf',component:components.ProfileConfigComponent},
      {path:'contact', component:components.ContactComponent}
    ]
  },
  {
    path:'',
    component:WebsiteComponent,
    children:[
      {path:'login', component:components.LoginComponent},
      {path:'forgot-password', component:components.ForgotPasswordComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
