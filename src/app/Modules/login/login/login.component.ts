import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/core/model/Login';
import { LoginService } from 'src/app/shared/Services/Login/login.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;

  constructor(
    private router: Router,
    private LoginSvc: LoginService,
    private fb: FormBuilder
  ) {
   
  }

  ngOnInit(): void {
    this.loginFormGroup = this.fb.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required],
    });
  }

  btnLoginCLick() {
    debugger;
    let loginObj: Login = {
      Id: 0,
      IdCLiente: 0,
      Senha: this.loginFormGroup.controls['senha'].value,
      Usuario: this.loginFormGroup.controls['usuario'].value,
    };

    this.LoginSvc.Auth(loginObj).subscribe((x) => {
      debugger;
      console.log(x);
      this.router.navigateByUrl('cliente');
    },err=>{
      err as HttpErrorResponse
      debugger
      alert("nao autorizado, status: "+err.status)
    });
  }
}
