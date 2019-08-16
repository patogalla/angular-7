import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as core from './core'
import { LoginComponent } from './website';
const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'my',
    loadChildren:() => import('./website/website.module').then(m => m.WebsiteModule)
  },
  {
    path:'admin',
    loadChildren:() => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'not-found',
    component: core.NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
  