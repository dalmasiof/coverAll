import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/core/model/Cliente';
import { ClienteService } from 'src/app/shared/Services/Cliente/cliente.service';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-cliete-update',
  templateUrl: './cliete-update.component.html',
  styleUrls: ['./cliete-update.component.scss']
})
export class ClieteUpdateComponent implements OnInit {

  ClienteToUpdate:Cliente | undefined
  formCad!: FormGroup;
  MASKS = utilsBr.MASKS;

  

 
  constructor(private fb:FormBuilder,private clienteSvc:ClienteService ,private routerSvc:Router,
    private toastSvc:ToastrService, private localStorageSvc:LocalStorageService, private datePipe:DatePipe ) {
      this.ClienteToUpdate = this.localStorageSvc.getValue('cliente')
      let data = this.datePipe.transform(this.ClienteToUpdate?.dataNascimento,'yyyy-MM-dd')

    this.formCad = fb.group({
      id:[this.ClienteToUpdate?.id,Validators.required],
      nome:[this.ClienteToUpdate?.nome,Validators.required],
      sobrenome:[this.ClienteToUpdate?.sobrenome,Validators.required],
      email:[this.ClienteToUpdate?.email,Validators.required],
      genero:[this.ClienteToUpdate?.genero,Validators.required],
      cpf:[this.ClienteToUpdate?.cpf,Validators.required],
      dataNascimento:[ '1996-05-13',Validators.required],
      telefone:[this.ClienteToUpdate?.telefone,Validators.required],
      uf:[this.ClienteToUpdate?.uf,Validators.required],
      cidade:[this.ClienteToUpdate?.cidade,Validators.required],
      cep:[this.ClienteToUpdate?.cep,Validators.required],
      endereco:[this.ClienteToUpdate?.endereco,Validators.required],
    })

   }

  ngOnInit(): void {
  }

  obBtnUpdateClick(){
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
    this.clienteSvc.Update(objCliente).subscribe((x)=>{
      this.toastSvc.success("Client successfully changed!","Success")
      this.routerSvc.navigateByUrl('/cliente/lista')
    })

    

  }

}
