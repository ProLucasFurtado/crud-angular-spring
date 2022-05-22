import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProjetosService } from '../services/projetos.service';


@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.scss']
})
export class ProjetoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ProjetosService,
              private snackBar: MatSnackBar) {

    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(result => console.log(result), error => this.onError());
  }

  onCancel(){}

  private onError() {
    this.snackBar.open('Erro ao salvar projeto.', 'X', {duration: 5000 });
  }

}
