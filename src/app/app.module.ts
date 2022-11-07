import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgxSearchBarFzModule, NgxPaginatorFzModule } from 'projects/search-bar-fz/src/public-api';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
  FormsModule,
    BrowserModule,
    HttpClientModule,
    NgxSearchBarFzModule,
    NgxPaginatorFzModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
