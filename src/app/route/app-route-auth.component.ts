import {LogoutComponent} from 'app/auth/logout/logout.component';

import {Routes, RouterModule} from '@angular/router';

// Add login
let appAuthRoute: Routes = [
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'account',
        loadChildren: 'app/user/user.module#UserModule'
    }
]

export default RouterModule.forChild(appAuthRoute);
