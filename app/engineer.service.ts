import { Injectable } from '@angular/core';
import {Engineer} from './engineer';
import {ENGINEERS} from './engineers';


@Injectable()
export class EngineerService {
    filtered : Engineer[];
    getEngineers(): Engineer[] {
            return ENGINEERS;
    }
    
    getFilteredEngineers(): Engineer[] {
            console.log(this.filtered);
            return this.filtered;
    }
    
    filterEngineers(searchTerm){
            this.filtered = [];
            for (var e = 0; e < ENGINEERS.length; e++) {
                if (ENGINEERS[e].name.includes(searchTerm)) {
                    this.filtered.push(ENGINEERS[e]);
                }
            }
            return this.filtered;
    }
}