import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgTrixComponent } from './ng-trix.component';
import { MatInputModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, MatInputModule, FormsModule, ReactiveFormsModule],
  declarations: [NgTrixComponent],
  exports: [NgTrixComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgTrixModule {}
