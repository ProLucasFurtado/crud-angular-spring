import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Projeto } from './../model/projeto';
import { ProjetosService } from './../services/projetos.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  projetos$: Observable<Projeto[]>;
  displayedColumns = ['nome', 'categoria'];

  //projetosService: ProjetosService;

  constructor(private projetosService: ProjetosService) {
    //this.projetos = [];
    //this.projetosService = new ProjetosService();
    this.projetos$ = this.projetosService.list();
  }

  ngOnInit(): void { }

}
