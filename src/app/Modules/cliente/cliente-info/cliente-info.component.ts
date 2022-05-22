import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/core/model/Cliente';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';
import { utilsBr } from 'js-brasil';

@Component({
  selector: 'app-cliente-info',
  templateUrl: './cliente-info.component.html',
  styleUrls: ['./cliente-info.component.scss'],
})
export class ClienteInfoComponent implements OnInit {
  cliente!: Cliente;
  clienteFormGroup: FormGroup;
  MASKS = utilsBr.MASKS;
  constructor(
    private localStorageSvc: LocalStorageService,
    private fb: FormBuilder,
    private datePipe:DatePipe
  ) {
    let clienteMemo:Cliente = this.localStorageSvc.getValue('cliente');
    this.cliente = clienteMemo;
    

    this.clienteFormGroup = this.fb.group({
      id: [clienteMemo.id],
      cep: [clienteMemo.cep],
      cpf: [clienteMemo.cpf],
      cidade: [clienteMemo.cidade],
      dataNascimento: [this.datePipe.transform(clienteMemo.dataNascimento,'yyyy-MM-dd')],
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

  }
}
