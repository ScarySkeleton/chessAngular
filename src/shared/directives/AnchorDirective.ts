import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[chess-anchor]',
})
export class AnchorDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
