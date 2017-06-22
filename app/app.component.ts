import { Component, Input} from '@angular/core';
import { OnInit } from '@angular/core';
import { DisplayComponent } from './display.component';
import { SearchComponent } from './search.component';

@Component({
  selector: 'rse-demo',
  template: `
          <h1>{{title}}</h1>
              <label>Engineering: </label>
              <input [(ngModel)]="searchEngineer" placeholder="Put Names Here"/>
              <rse-display [searchTerm] = "searchEngineer"></rse-display>
          <div>
      </div>  
          `
})

export class AppComponent{
    title = 'Engineers';      
}