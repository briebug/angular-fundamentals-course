import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@bba/material';
import { UiToolbarModule } from '@bba/ui-toolbar';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
