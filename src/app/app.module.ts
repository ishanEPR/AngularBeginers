import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormAngularMaterialComponent } from './form-angular-material/form-angular-material.component';
import {MatButtonModule} from '@angular/material/button';
import { ServerDetailsComponent } from './server-details/server-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent,
    FormComponent,
    FormAngularMaterialComponent,
    ServerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
