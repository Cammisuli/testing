import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dev-app',
  templateUrl: 'dev.component.html',
  styleUrls: ['dev.component.css']
})
export class DevAppComponent {
  title = 'dev works!';
  
  constructor() {
    // empty
  }
}
