import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { DASHBOARD_COMPONENTS } from './model/index';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ContainerComponent],
  declarations: [
    ContainerComponent, 
    ...DASHBOARD_COMPONENTS
  ]
})
export class DashboardModule { }
