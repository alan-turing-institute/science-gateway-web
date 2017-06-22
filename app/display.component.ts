import { Component, Input, OnChanges, SimpleChange} from '@angular/core';
import { OnInit } from '@angular/core';

import { Engineer } from './engineer';
import { EngineerService } from './engineer.service';
import { MyComponentService } from './mycomponent.service';
import { MyComponent } from './mycomponent';

@Component({
  selector: 'rse-display',
  providers: [EngineerService, MyComponentService], 
//   template: `<ng-include={{getTemplate()}}></ng-include>`
  template: `<ul class="engineers">
            <li *ngFor="let engineer of selectedEngineers">
                <label> {{engineer.name}} </label>
            </li>

            <div *ngFor="let component of selectedComponents">
                <div *ngIf="component.type == 'text'">
                    <label>{{component.label}}:<input type=\"text\" name=\"name\" /></label>
                </div>
                <div *ngIf="component.type == 'select'">
                    <select>
                        <option *ngFor="let o of component.options" [ngValue]="o">{{o}}</option>
                    </select>
                </div>
             </div>
          </ul>
          `
})

// <div *ngFor="let component of selectedComponents>{component}</div>
export class DisplayComponent implements OnInit, OnChanges {
    
    @Input() searchTerm:string;
    
    selectedEngineers:Engineer [];
    selectedComponents:MyComponent [];
    
    constructor(private engineerService: EngineerService,private componentService: MyComponentService) {
    }

    getEngineers(): void {
        this.selectedEngineers = this.engineerService.getEngineers();
        
    }
    
    filterEngineers(searchTerm:string): void {
        this.selectedEngineers = this.engineerService.filterEngineers(searchTerm);
        console.log(this.selectedEngineers);
    }
    
    ngOnInit() {
        this.selectedEngineers = this.engineerService.filterEngineers("");    
        this.selectedComponents = this.componentService.getMyComponents()
        console.log("test:"+this.selectedComponents);
    }
    
    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        this.selectedEngineers = this.engineerService.filterEngineers(changes["searchTerm"].currentValue);    
    }
}