import { Injectable } from '@angular/core';
import {MyComponent} from './mycomponent';
import {MYCOMPONENTS} from './mycomponents';


@Injectable()
export class MyComponentService {
    
    getMyComponents(): MyComponent[] {
        return MYCOMPONENTS;
    }

    renderTextBox(myLabel):string {
        return "<label>"+myLabel+":<input type=\"text\" name=\"name\" /></label>"
    }
    
    getComponents ():string[] {
        var components = this.getMyComponents()
        var listItems = []
        components.forEach((aComponent)=> {
            if (aComponent.type.valueOf()==="text"){
                listItems.push(this.renderTextBox(aComponent.label))
            }
        })
        return listItems
    }
}