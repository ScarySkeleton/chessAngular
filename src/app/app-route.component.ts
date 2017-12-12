import { Routes } from '@angular/router';

import { links } from '../assets/pages/links';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const appRoute: Routes = links.map(link => {
    return {
        path: link.link,
        component: link.component
    }
})
