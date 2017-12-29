import {Pipe} from '@angular/core';

@Pipe({
    name: "toArray"
})
export class ToArrayPipe {
    transform(elem: any): Array<any> {
        
        if(elem === null) {
            return [];//new Error("The elemen't cannot be null.");
        }

        const array = [];
        switch(typeof elem) {
            case "object":
                if(elem instanceof Array) {
                    return elem;
                }

                for(let key in elem) {
                    if(elem.hasOwnProperty(key)) {
                        array.push(elem[key]);
                    }
                }

                return array;

            default: 
                return []; //new Error("Cannot understand the type of the input variable");
        }
    }
}
