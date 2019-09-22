import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
