import { Routes } from '@angular/router';

import { links } from '../assets/pages/links';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

let appRoute: Routes = links.map(link => {
    return {
        path: link.link,
        component: link.component
    }
})

// Add page not found component
appRoute.push({
    path: "**",
    component: PageNotFoundComponent
});

export default appRoute;
