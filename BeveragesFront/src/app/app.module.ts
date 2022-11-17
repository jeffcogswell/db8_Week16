import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DrinkDetailComponent } from './drink-detail/drink-detail.component';
import { DrinkListComponent } from './drink-list/drink-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkDetailComponent,
    DrinkListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
