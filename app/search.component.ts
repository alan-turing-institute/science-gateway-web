import { Component, Input } from '@angular/core';


@Component({
  selector: 'rse-filter',
  template: 
  `   
      <div>
        <label>Engineer: </label>
        <input [(ngModel)]="searchEngineer" placeholder="Put Name Here"/>
      </div>
  `
})
export class SearchComponent {
  @Input()
  searchEngineer: string;
}