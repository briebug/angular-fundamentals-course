import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@bba/material';
import { LoginComponent } from './login/login.component';
import { RoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RoutingModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class UiLoginModule { }
