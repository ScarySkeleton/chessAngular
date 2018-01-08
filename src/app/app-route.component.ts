import {links} from 'assets/pages/links';
import {HomeComponent} from 'app/components/home/home.component';
import {LoginComponent} from 'app/auth/login/login.component';
import {LogoutComponent} from 'app/auth/logout/logout.component';
import {RegisterComponent} from 'app/auth/register/register.component';
import {PageNotFoundComponent} from 'app/components/page-not-found/page-not-found.component';
import {AuthGuardService} from 'shared/services/auth.guard.service';
import {NonAuthGuardService} from 'shared/services/nonauth.guard.service';

import {Routes, RouterModule} from '@angular/router';
import { resolve } from 'q';

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
    pathMatch: 'full',
});

// Add login
appRoute.push({
    path: 'login',
    component: LoginComponent,
    canActivate: [NonAuthGuardService],
})

// Register
appRoute.push({
    path: 'register',
    component: RegisterComponent,
    canActivate: [NonAuthGuardService],
})

// Add logout
appRoute.push({
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuardService],
})

// Add accout
appRoute.push({
    path: 'account',
    loadChildren: () => import('app/user/user.module')
        .then(module => {
            return module.default;
        })
     //'app/user/user.module#UserModule'
    // () => new Promise(
    //     resolve => {
    //         (require as any).ensure([], require => {
    //             resolve(require('./user/user.module').UserModule)
    //         })
    //     }
    // ) 
    //'./user/user.module#UserModule'
})


// Add page not found component
appRoute.push({
    path: "**",
    component: PageNotFoundComponent
});

export default RouterModule.forRoot(
    appRoute,
    //{ enableTracing: true } // only for debugg
);