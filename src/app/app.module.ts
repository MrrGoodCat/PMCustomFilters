import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomFilterObjectComponent } from './custom-filter-object/custom-filter-object.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomFilterObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
