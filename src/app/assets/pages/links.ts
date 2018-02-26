import {HomeComponent} from 'app/components/home/home.component';
import {AboutComponent} from 'app/components/about/about.component';
import {DefaultComponent} from 'app/components/default/default.component';
import {LocationComponent} from 'app/components/location/location.component';

export const userAccountHomeLink: string = 'account';
export const homeLink: string = 'home';

export const links = [
    {
        caption: "Главная",
        link: homeLink,
        component: HomeComponent,
        i: "fa fa-home fa-2x",
    },
    // {
    //     caption: "Играть",
    //     link: "game", 
    //     component: DefaultComponent,
    //     i: "fa fa-gamepad"
    // },
    {
        caption: "Уроки",
        link: "lessons",
        component: DefaultComponent,
        i: "fa fa-list fa-2x",
    },
    {
        caption: "История",
        link: "history",
        component: DefaultComponent,
        i: "fa fa-bar-chart-o fa-2x",
    }, 
    {
        caption: "Локация",
        link: "map",
        component: LocationComponent,
        i: "fa fa-map-marker fa-2x",
    }, 
    {
        caption: "Мы",
        link: "about",
        component: AboutComponent,
        i: "fa fa-info fa-2x",
    }
];
