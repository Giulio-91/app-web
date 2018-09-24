import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FooterContainerComponent],
  declarations: [FooterContainerComponent]
})
export class FooterModule { }
