import {Coordinate} from 'shared/interfaces/type/Coordinate';

const companyLocation: Array<Coordinate> = [{
    latitude: 49.4325916,
    longitude: 32.0767546
}]

const mapSettings: {
    height: number,
    zoom: number
} = {
    height: 300,
    zoom: 16
}

export {companyLocation, mapSettings};
