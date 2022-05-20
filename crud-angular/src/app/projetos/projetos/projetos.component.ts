import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Projeto } from './../model/projeto';
import { ProjetosService } from './../services/projetos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.scss']
})
export class ProjetosComponent implements OnInit {

  projetos$: Observable<Projeto[]>;
  displayedColumns = ['nome', 'categoria', 'acoes'];

  //projetosService: ProjetosService;

  constructor(
    private projetosService: ProjetosService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
    ) {
      //this.projetos = [];
      //this.projetosService = new ProjetosService();
    this.projetos$ = this.projetosService.list()
    .pipe(
      catchError(error => {
       this.onError('Erro ao carregar projetos.');
        return of([])
      })
    );

  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void { }

  onAdd(){
    this.router.navigate(['new'], {relativeTo:this.route});
  }
}
