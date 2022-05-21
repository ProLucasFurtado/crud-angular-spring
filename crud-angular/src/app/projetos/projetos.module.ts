import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos/projetos.component';
import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProjetosComponent,
    ProjetoFormComponent
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProjetosModule { }
