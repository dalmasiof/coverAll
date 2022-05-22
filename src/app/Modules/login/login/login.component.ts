import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/model/Login';
import { LoginService } from 'src/app/shared/Services/Login/login.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  isLoading:boolean=false

  constructor(
    private router: Router,
    private LoginSvc: LoginService,
    private fb: FormBuilder,
    private localStorageSvc: LocalStorageService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  btnLoginCLick() {
    this.isLoading=true
    let loginObj: Login = {
      Id: 0,
      IdCLiente: 0,
      Senha: this.loginFormGroup.controls['senha'].value,
      Usuario: this.loginFormGroup.controls['usuario'].value,
    };

    this.LoginSvc.Auth(loginObj).subscribe(
      (x) => {
        debugger
        if(this.localStorageSvc.setValue('cliente', x)){
          this.router.navigateByUrl('cliente/lista');
        }
        else{
          this.toastr.error("Erro ao gravar usuário, procure o suporte","Erro desconhecido")
        }
        
      },
      (err) => {
        if (err.status == 401) {
          this.toastr.warning("Usuário não encontrado, status: "+err.status,"Falha de autenticação")
          this.isLoading=false

        }
      },
      ()=>this.isLoading = false
    );
  }
}
