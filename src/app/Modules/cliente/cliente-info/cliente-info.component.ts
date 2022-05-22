import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/model/Cliente';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.scss'],
})
export class ClienteInfoComponent implements OnInit {
  cliente!: Cliente;
  clienteFormGroup: FormGroup;
  Nome:string="dsssda"
  constructor(
    private localStorageSvc: LocalStorageService,
    private fb: FormBuilder
  ) {
    debugger;
    let clienteMemo:Cliente = this.localStorageSvc.getValue('cliente');
    this.cliente = clienteMemo;
    

    this.clienteFormGroup = this.fb.group({
      id: [clienteMemo.id],
      cep: [clienteMemo.cep],
      cpf: [clienteMemo.cpf],
      cidade: [clienteMemo.cidade],
      dataNascimento: [clienteMemo.dataNascimento],
      endereco: [clienteMemo.endereco],
      genero: [clienteMemo.genero],
      nome: [clienteMemo.nome],
      sobrenome: [clienteMemo.sobrenome],
      telefone: [clienteMemo.telefone],
      uf: [clienteMemo.uf],
      email: [clienteMemo.email],
    });
  }

  ngOnInit(): void {
    // console.log(this.cliente);
    // // this.clienteFormGroup = this.fb.group({
    //   Id: [this.cliente.Id],
    //   CEP: [this.cliente.CEP],
    //   CPF: [this.cliente.CPF],
    //   Cidade: [this.cliente.Cidade],
    //   DataNascimento: [this.cliente.DataNascimento],
    //   Endereco: [this.cliente.Endereco],
    //   Genero: [this.cliente.Genero],
    //   Nome: [this.cliente.Nome],
    //   Sobrenome: [this.cliente.Sobrenome],
    //   Telefone: [this.cliente.Telefone],
    //   UF: [this.cliente.UF],
    //   email: [this.cliente.email],
    // });
  }
}
