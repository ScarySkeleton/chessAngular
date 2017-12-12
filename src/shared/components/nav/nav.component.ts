import { Component, ViewEncapsulation } from '@angular/core';

import ILink from '../../../assets/pages/ILink';
import { links } from '../../../assets/pages/links';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'chess-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export default class NavComponent {
    links: Array<ILink> = links
}
