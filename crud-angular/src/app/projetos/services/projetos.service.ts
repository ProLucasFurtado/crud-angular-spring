import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs';

import { Projeto } from './../model/projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  private readonly API = 'api/projetos';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Projeto[]>(this.API)
    .pipe(
      first(),
      //delay(3000),
      tap(projetos => console.log(projetos))
    );
  }
}
