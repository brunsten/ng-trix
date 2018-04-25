import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { NgTrixComponent } from "./ng-trix.component";

@NgModule({
    declarations: [NgTrixComponent],
    exports: [NgTrixComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NgTrixModule {}