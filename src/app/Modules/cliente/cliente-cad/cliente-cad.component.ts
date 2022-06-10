import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/model/Cliente';
import { ClienteService } from 'src/app/shared/Services/Cliente/cliente.service';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { LoggedUserService } from 'src/app/core/services/loggedUser/logged-user.service';


@Component({
  selector: 'app-cliente-cad',
  templateUrl: './cliente-cad.component.html',
  styleUrls: ['./cliente-cad.component.scss'],
  
})
export class ClienteCadComponent implements OnInit {


  formCad!: FormGroup;
  MASKS = utilsBr.MASKS;

  senha = new FormControl('',[Validators.required])
  confirmaSenha = new FormControl('',
  [Validators.required
  ,CustomValidators.equalTo(this.senha)])

  constructor(private fb:FormBuilder,private clienteSvc:ClienteService ,private routerSvc:Router,
    private toastSvc:ToastrService, private localStorageSvc:LocalStorageService, private loggedUserSvc:LoggedUserService
    ) {
    this.formCad = fb.group({
      nome:['',Validators.required],
      sobrenome:['',Validators.required],
      email:['',Validators.required],
      genero:['',Validators.required],
      senha:this.senha,
      confirmaSenha:this.confirmaSenha,
      cpf:['',Validators.required],
      dataNascimento:['',Validators.required],
      telefone:['',Validators.required],
      uf:['',Validators.required],
      cidade:['',Validators.required],
      cep:['',Validators.required],
      endereco:['',Validators.required],
    })
   }

  ngOnInit(): void {
  }

  obBtnGravarClick(){
    let objCliente:Cliente = Object.assign({},this.formCad.value)

    objCliente.cep = objCliente.cep.replace('-','').
    replace('.','')
    objCliente.cpf = objCliente.cpf.replace('-','').
    replace('.','').
    replace('.','')
    objCliente.telefone = objCliente.telefone.
    replace('(','').
    replace(')','').
    replace(' ','').
    replace('-','')

    // objCliente);
    this.clienteSvc.Create(objCliente).subscribe((x)=>{
      this.toastSvc.success("Client successfully recorded!","Success")
      if(this.localStorageSvc.getValue('cliente')){
        this.routerSvc.navigateByUrl('/cliente/lista')
      }
      else{
        this.localStorageSvc.setValue('cliente',x)
        this.loggedUserSvc.setValue(true)
        this.routerSvc.navigateByUrl('/produto')

      }
    })

  }

}
