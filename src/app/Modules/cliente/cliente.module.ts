import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteInfoComponent } from './cliente-info/cliente-info.component';
import { ClientListComponent } from './client-list/client-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ClieteUpdateComponent } from './cliete-update/cliete-update.component';
import { ClienteRemoveComponent } from './cliente-remove/cliente-remove.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClienteCadComponent } from './cliente-cad/cliente-cad.component';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation';
import { MatNativeDateModule } from '@angular/material/core';
import { BotoesComponent } from './cliente-remove/botoes/botoes.component';
import { BotoesInfoComponent } from './cliente-info/botoes-info/botoes-info.component';
import { ClienteBaseComponent } from './cliente-info/cliente-base/cliente-base.component';



@NgModule({
  declarations: [
    ClienteInfoComponent,
    ClientListComponent,
    ClienteCadComponent,
    ClieteUpdateComponent,
    ClienteRemoveComponent,
    BotoesComponent,
    BotoesInfoComponent,
    ClienteBaseComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    TextMaskModule,
    CustomFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
  ],
  providers:[DatePipe]
})
export class ClienteModule { }
