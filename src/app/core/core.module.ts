import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';

import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpService } from './services/http.service';



@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule,MatToolbarModule,MatIconModule,MatButtonModule],
  exports: [NavBarComponent, FooterComponent],
  providers:[HttpService]
})
export class CoreModule {}
