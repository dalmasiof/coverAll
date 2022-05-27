import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorageService } from './shared/Services/LocalStorage/local-storage.service';
import { LoggedUserService } from './core/services/loggedUser/logged-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  /**
   *
   */
  title = 'Cover All - Roupas PLus Size';
  
  constructor(private localStorageSvc:LocalStorageService, private loggedUserSvc:LoggedUserService) {}
  
  ngOnInit(): void {
    let cliente = this.localStorageSvc.getValue('cliente');
    if(cliente){
      this.loggedUserSvc.setValue(true);
    }
    else{
      this.loggedUserSvc.setValue(false);
    }
  }
  
}
