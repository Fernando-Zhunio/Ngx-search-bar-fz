import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSelectFzComponent } from './ngx-select-fz/ngx-select-fz.component';
import { NgxOptionFzComponent } from './ngx-option-fz/ngx-option-fz.component';



@NgModule({
  declarations: [NgxSelectFzComponent, NgxOptionFzComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxSelectFzComponent, NgxOptionFzComponent]
})
export class NgxSelectFzModule { }
