import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './../shared/app-material/app-material.module';
import { SharedModule } from './../shared/shared.module';
import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos/projetos.component';

@NgModule({
  declarations: [
    ProjetosComponent
  ],
  imports: [
    CommonModule,
    ProjetosRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ProjetosModule { }
