import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxSearchBarFzComponent } from './ngx-search-bar-fz/ngx-search-bar-fz.component';



@NgModule({
  declarations: [
    NgxSearchBarFzComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    NgxSearchBarFzComponent
  ]
})
export class NgxSearchBarFzModule { }
