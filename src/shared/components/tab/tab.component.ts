import { Component, Input } from '@angular/core';

import ITab from './ITab';

@Component({
    selector: 'chess-tab',
    templateUrl: './tab.component.html',
    styleUrls: ['./tab.component.scss']
})
export class TabComponent {
    @Input() tab: ITab;
    @Input() className: string;
}
