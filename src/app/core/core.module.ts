import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteModule } from '../website/website.module';
import { AdminModule } from '../admin/admin.module';
import { RouterModule } from '@angular/router';
import * as component from './index'

@NgModule({
  declarations: [component.CoreComponent, component.NotFoundComponent],
  imports: [
    CommonModule,
    WebsiteModule,
    AdminModule,
    RouterModule
  ],
  exports:[component.CoreComponent],
  providers:[]
})
export class CoreModule { }
