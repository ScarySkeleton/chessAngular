import {MapComponent} from './components/map/map.component';

import {NgModule} from '@angular/core';
import {AgmCoreModule} from '@agm/core';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    declarations: [
        MapComponent
    ],
    imports: [
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCW6vVislPDpuL2BJ_ua_gVt2U8tL5XBzM'
        })
    ],
    exports: [
        MapComponent,
    ]
})
class SharedModule {}

export {SharedModule};
