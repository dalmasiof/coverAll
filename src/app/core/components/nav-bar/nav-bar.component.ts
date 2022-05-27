import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { LoggedUserService } from 'src/app/core/services/loggedUser/logged-user.service';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isLogged:boolean = false
  cliente:Cliente | undefined

  constructor(private localStorageSvc:LocalStorageService, private loggedUser:LoggedUserService
    ) {
      
      this.loggedUser.getValue().subscribe((x)=>{
        debugger;
        if(this.localStorageSvc.getValue('cliente'))
        this.cliente = this.localStorageSvc.getValue('cliente');
        this.isLogged = x})
     }

  ngOnInit(): void {
  }

  logOut(){
    this.localStorageSvc.setValue('cliente',null)
    this.loggedUser.setValue(false);
  }
}
