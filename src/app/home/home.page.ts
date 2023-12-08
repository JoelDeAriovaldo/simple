import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
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
  
  constructor(public storage: StorageService) {}

  salvarDados() {
    let info = {
      nome: this.nome,
      idade: this.idade,
      endereco: this.endereco,
      email: this.email,
      celular: this.celular,
    };

    this.storage.formData = info;

    alert('Salvo com sucesso');

    console.log(this.storage.formData);
  }
}
