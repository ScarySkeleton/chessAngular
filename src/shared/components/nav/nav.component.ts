import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

import ILink from 'assets/pages/ILink';
import { links } from 'assets/pages/links';

@Component({
    selector: 'chess-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
    links: Array<ILink> = links
}
