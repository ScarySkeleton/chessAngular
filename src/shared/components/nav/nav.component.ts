import { Component } from '@angular/core';

import ILink from '../../../assets/pages/ILink';
import links from '../../../assets/pages/links';

@Component({
    selector: 'chess-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export default class NavComponent {
    links: Array<ILink> = links
}
