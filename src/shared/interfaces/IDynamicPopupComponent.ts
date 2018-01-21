import {Input} from '@angular/core';

export class IDynamicPopupComponent {
    @Input()
    public message: string;
    @Input()
    public solution: string;
}
