import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private defaultUser = { name: 'Piotr Hejduk' };

  getDefaultUser() {
    return this.defaultUser;
  }
}
