import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginatorFzComponent } from './ngx-paginator-fz-component/ngx-paginator-fz-component.component';
import { NgxSelectFzModule } from '../ngx-select-fz/ngx-select-fz.module';



@NgModule({
  declarations: [
    NgxPaginatorFzComponent
  ],
  imports: [
    CommonModule,
    NgxSelectFzModule,
  ],
  exports: [
    NgxPaginatorFzComponent
  ]
})
export class NgxPaginatorFzModule { }
