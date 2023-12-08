import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: any;
  idade: any;
  endereco: any;
  email: any;
  celular: any;

  constructor() {}

  salvarDados(){
    alert('Nome: '+this.nome)
  }
}
