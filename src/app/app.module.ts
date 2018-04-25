import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgTrixModule } from '../ng-trix/ng-trix.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTrixModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
