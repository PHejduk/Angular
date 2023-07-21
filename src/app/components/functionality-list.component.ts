import { Component } from '@angular/core';
import { Functionality } from '../models';
import { FunctionalityService } from '../services/functionality.service';

@Component({
  selector: 'app-functionality-list',
  templateUrl: './functionality-list.component.html',
})
export class FunctionalityListComponent {
  functionalities: Functionality[];

  constructor(private functionalityService: FunctionalityService) {
    this.functionalities = functionalityService.getFunctionalities();
  }
}
