import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro: FormGroup;

  mensagens = {
    nome: [
      {tipo:'required', mensagem: 'O campo Nome é obrigatório!'},
      {tipo:'minLength', mensagem: 'O campo Nome precisa ter pelo menos 3 caracteres!'}
    ],
    cpf:[
      {tipo:'required', mensagem: 'O campo CPF é obrigatório!'},
    ],
    email:[
      {tipo:'required', mensagem: 'O campo EMAIL é obrigatório!'},
      {tipo:'email', mensagem: 'E-mail inválido!'}
    ],
    senha:[
      {tipo:'required', mensagem: 'O campo SENHA é obrigatório!'},
    ],
    confirmaSenha:[
      {tipo:'required', mensagem: 'O campo CONFIRMAR SENHA é obrigatório!'},
    ],
  };

  constructor(private formBuilder: FormBuilder) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.required],
      confirmaSenha: ['', Validators.required]
    });
   }

  ngOnInit() {
  }

  salvarRegistro(){
    console.log('Formulário', this.formRegistro.valid);
  }

}
