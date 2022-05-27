import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoggedUserService {
  loggedUser = new Subject<boolean>();

  constructor() {}

  setValue(logged: boolean) {
    this.loggedUser.next(logged);
  }

  getValue(): Subject<boolean> {
    return this.loggedUser;
  }
}
