import { Directive, Input, SimpleChanges, OnChanges, Inject, OnInit, Optional, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators, NgControl } from '@angular/forms';

@Directive({
  selector: '[ngTrix]'
})
export class NgTrixDirective implements OnInit, OnChanges {
  @Input('ngTrix') trixElement: any;
  @Input() debug = false;
  @Input() value: string;
  constructor(@Optional() private _ngControl: NgControl, private _renderer: Renderer2) {
    if (this.debug) {
      // console.log(this._ngControl);
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['trixElement']) {
      this.initTrix();
    }
    console.log(changes);
  }
  ngOnInit(): void {}
  initTrix(): void {
    console.log(this.trixElement);
    if (this.trixElement) {
      this._renderer.listen(this.trixElement, 'trix-change', (event: Event) => {
        if (event.eventPhase === Event.AT_TARGET) {
          if (this._ngControl) {
            this._ngControl.valueAccessor.writeValue(this.trixElement.value);
          }
        }
      });
    }
  }

  setTrixValue(value: string): void {
    this.trixElement.value;
  }
}
