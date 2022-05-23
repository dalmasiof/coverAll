import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ClienteService } from 'src/app/shared/Services/Cliente/cliente.service';
import { LocalStorageService } from 'src/app/shared/Services/LocalStorage/local-storage.service';

@Component({
  selector: 'app-cliente-remove',
  templateUrl: './cliente-remove.component.html',
  styleUrls: ['./cliente-remove.component.scss']
})
export class ClienteRemoveComponent implements OnInit {

  constructor(private clienteSvc:ClienteService, private localStorageSvc:LocalStorageService,private toastSvc:ToastrService,private dialogRef: MatDialog) { }

  ngOnInit(): void {
  }

  btnRemoveEmmit(val:string){
    
    let clienteMemo = this.localStorageSvc.getValue('cliente')
    let Id = clienteMemo.id;

    if(val == '1'){
      this.clienteSvc.Delete(Id).subscribe((x)=>{
        this.toastSvc.success('Cliente removido com sucesso','Sucesso')
        clienteMemo.nome ='removed'
        this.localStorageSvc.setValue('cliente',clienteMemo)
        this.dialogRef.closeAll()
      })
      
    }
    else{
      // this.localStorageSvc.setValue('cliente',null);
      this.dialogRef.closeAll()

    }
  }

}
