import { Component, OnInit } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  listaUsuarios: Usuario[] = [];

  constructor(private storageService: StorageService) { }

  ngOnInit(): void { }

  async buscarUsuarios(){
    this.listaUsuarios = await this.storageService.getAll();
  }

  ionViewEnter(){
    this.buscarUsuarios();
  }
}
