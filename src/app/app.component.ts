import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  ngModel = '([<b>ngModel</b>])';
  formGroup = new FormGroup({
    formControl: new FormControl('form<i>Control</i>', [Validators.required])
  });
 
}
