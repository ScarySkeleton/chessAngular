import { Routes } from '@angular/router';

import { links } from 'assets/pages/links';
import { HomeComponent } from 'app/home/home.component.ts';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let appRoute: Routes = links.map(link => {
    return {
        path: link.link,
        component: link.component
    }
})

// Add def load page - home
appRoute.push({ // or, maybe, would be better to add redirect to ?
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
});

// Add page not found component
appRoute.push({
    path: "**",
    component: PageNotFoundComponent
});

export default appRoute;
