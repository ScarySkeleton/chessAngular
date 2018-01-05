
import ILink from 'assets/pages/ILink';
import {links} from 'assets/pages/links';
import {AuthService} from 'shared/services/auth.service';

import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'chess-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class NavComponent {
    links: Array<ILink> = links;

    constructor(private authService: AuthService) {
    }
}
