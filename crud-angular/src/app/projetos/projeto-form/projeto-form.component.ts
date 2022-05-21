import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ProjetosService } from '../services/projetos.service';


@Component({
  selector: 'app-projeto-form',
  templateUrl: './projeto-form.component.html',
  styleUrls: ['./projeto-form.component.scss']
})
export class ProjetoFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private service: ProjetosService) {

    this.form = this.formBuilder.group({
      nome: [null],
      categoria: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value);
  }
  onCancel(){}

}
