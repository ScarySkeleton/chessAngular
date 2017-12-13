import { Routes, RouterModule } from '@angular/router';

import { links } from 'assets/pages/links';
import { HomeComponent } from 'app/components/home/home.component';
import { LoginComponent } from 'app/auth/login/login.component';
import { LogoutComponent } from 'app/auth/logout/logout.component';
import { RegisterComponent } from 'app/auth/register/register.component';
import { PageNotFoundComponent } from 'app/components/page-not-found/page-not-found.component';

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

// Add login
appRoute.push({
    path: 'login',
    component: LoginComponent
})

// Add logout
appRoute.push({
    path: 'logout',
    component: LogoutComponent
})

// Register
appRoute.push({
    path: 'register',
    component: RegisterComponent
})

// Add page not found component
appRoute.push({
    path: "**",
    component: PageNotFoundComponent
});

export default RouterModule.forRoot(
    appRoute,
    { enableTracing: true } // only for debugg
);
