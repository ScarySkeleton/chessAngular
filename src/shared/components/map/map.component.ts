import {Coordinate} from './map.dictionary';

import {Component, Input} from '@angular/core';

@Component({
    selector: 'kainzen-map',
    templateUrl: './map.template.html',
    styleUrls: ['./map.style.scss']
})
class MapComponent {

    @Input()
    public defaultShow?: Coordinate;
    @Input()
    public markers?: Array<Coordinate>;
}

export {MapComponent};
