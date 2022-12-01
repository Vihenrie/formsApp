import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  formRegistro: FormGroup;
  usuario: Usuario = new Usuario();

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

  constructor(private formBuilder: FormBuilder, private storageService: StorageService, private route: Router) {
    this.formRegistro = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.required],
      confirmaSenha: ['', Validators.required]
    });
   }

  async salvarRegistro(){
    if(this.formRegistro.valid){
      this.usuario.nome = this.formRegistro.value.nome;
      this.usuario.cpf = this.formRegistro.value.cpf;
      this.usuario.email = this.formRegistro.value.email;
      this.usuario.senha = this.formRegistro.value.senha;
      await this.storageService.set(this.usuario.email, this.usuario);
      this.route.navigateByUrl('/home');
    }else{
      alert('Formulário inválido!');
    }
  }

}
