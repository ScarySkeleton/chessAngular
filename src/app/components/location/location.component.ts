import {Coordinate} from 'shared/interfaces/type/Coordinate';
import {companyLocation} from './location.dictionary';

import {Component} from '@angular/core';

@Component({
    selector: 'app-location',
    templateUrl: './location.template.html',
    styleUrls: ['./location.style.scss']
})
class LocationComponent {
    public defaultShow: Coordinate = companyLocation[0];
    public companyLocation: Array<Coordinate> = companyLocation;
}

export {LocationComponent};
