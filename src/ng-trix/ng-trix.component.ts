import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ng-trix',
  templateUrl: './ng-trix.component.html'
})
export class NgTrixComponent {
  ngModel = '([<b>ngModel</b>])';
  formGroup = new FormGroup({
    formControl: new FormControl('form<i>Control</i>', [Validators.required])
  });
  constructor() {}
}
