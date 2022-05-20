import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';

import { ProjetosComponent } from './projetos/projetos.component';

const routes: Routes = [
  {path: '', component: ProjetosComponent},
  {path: 'new', component: ProjetoFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetosRoutingModule { }
