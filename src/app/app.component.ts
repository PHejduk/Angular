import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  defaultUser: { name: string };

  constructor(private userService: UserService) {
    this.defaultUser = userService.getDefaultUser();
  }
}
