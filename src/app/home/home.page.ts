import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nome: any;
  idade: any;
  nPai: any;
  nMae: any;
  endereco: any;
  nuit: any;
  email: any;
  celular: any;


  constructor(public storage: StorageService) {}



  salvarDados() {
    let info = {
      nome: this.nome,
      idade: this.idade,
      nPai: this.nPai,
      nMae: this.nMae,
      endereco: this.endereco,
      email: this.email,
      nuit: this.nuit,
      celular: this.celular,
    };

    this.storage.armazenarDados(info);

    this.storage.formData = info;
    // console.log('info ', info, this.storage.formData);
    return;
    alert('Salvo com sucesso');

    console.log(this.storage.formData);
  }

  limparDados(){
    let info = {
      nome: this.nome = '',
      idade: this.idade = '',
      nPai: this.nPai = '',
      nMae: this.nMae = '',
      endereco: this.endereco = '',
      email: this.email = '',
      nuit: this.nuit = '',
      celular: this.celular = '',
    };


    alert('lIMPANDO DADOS')


  }
}
