import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomFilterObjectComponent } from './custom-filter-object/custom-filter-object.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CustomDropdownComponent } from './custom-dropdown/custom-dropdown.component';
import { CustomTextFieldComponent } from './custom-text-field/custom-text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomFilterObjectComponent,
    DropdownComponent,
    CustomDropdownComponent,
    CustomTextFieldComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
