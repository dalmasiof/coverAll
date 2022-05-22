import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LoginService } from './Services/Login/login.service';
import { LocalStorageService } from './Services/LocalStorage/local-storage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],providers:[LoginService,LocalStorageService]
})
export class SharedModule { }
