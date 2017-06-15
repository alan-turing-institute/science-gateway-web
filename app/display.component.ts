import { Component, Input, OnChanges, SimpleChange} from '@angular/core';
import { OnInit } from '@angular/core';

import { Engineer } from './engineer';
import { EngineerService } from './engineer.service';

@Component({
  selector: 'rse-display',
  providers: [EngineerService], 
  template: `
          <ul class="engineers">
            <li *ngFor="let engineer of selectedEngineers">
                <label> {{engineer.name}} </label>
            </li>
          </ul>
      `
})

export class DisplayComponent implements OnInit, OnChanges {
    
    @Input() searchTerm:string;
    
    selectedEngineers:Engineer [];
    
    constructor(private engineerService: EngineerService) {
    }
    
    getEngineers(): void {
        this.selectedEngineers = this.engineerService.getEngineers();
        console.log(this.selectedEngineers);
    }
    
    filterEngineers(searchTerm:string): void {
        this.selectedEngineers = this.engineerService.filterEngineers(searchTerm);
        //console.log(this.selectedEngineers);
    }
    
    ngOnInit() {
        this.selectedEngineers = this.engineerService.filterEngineers("");        
    }
    
    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        this.selectedEngineers = this.engineerService.filterEngineers(changes["searchTerm"].currentValue);    
    }
}