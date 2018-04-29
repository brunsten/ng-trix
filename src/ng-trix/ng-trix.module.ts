import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgTrixDirective } from './ng-trix.directive';
import { MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatInputModule],
  declarations: [NgTrixDirective],
  exports: [NgTrixDirective],
  schemas: []
})
export class NgTrixModule {}
