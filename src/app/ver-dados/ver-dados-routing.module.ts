import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDadosPage } from './ver-dados.page';

const routes: Routes = [
  {
    path: '',
    component: VerDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDadosPageRoutingModule {}
