import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDadosPageRoutingModule } from './ver-dados-routing.module';

import { VerDadosPage } from './ver-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDadosPageRoutingModule
  ],
  declarations: [VerDadosPage]
})
export class VerDadosPageModule {}
