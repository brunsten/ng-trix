import { Directive, Input, SimpleChanges, OnChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Directive({
  selector: '[ngTrix]'
})
export class NgTrixDirective implements OnChanges {
  @Input('ngTrix') trixElement: HTMLElement;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes['trixElement']) {
      this.initTrix();
    }
  }
  initTrix(): void {

  }
}
