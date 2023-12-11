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
  celular: any;
  pic: any;
  linkAtivo = false;

  constructor(public storage: StorageService) {}

  salvarDados() {
    let info;

    if (!this.nome || !this.celular) {
      alert('Nome e celurar sao requeridos');
      return;
    }
    info = {
      nome: this.nome,

      celular: this.celular,
      pic: this.pic,
    };

    this.storage.armazenarDados(info);

    this.storage.formData = info;
    this.linkAtivo = true;
  }

  selImg(event: any) {
    let fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      let imagem = fileInput.files[0];
      this.pic = URL.createObjectURL(imagem);
    }
  }

  limparDados() {
    let info = {
      nome: (this.nome = ''),
      celular: (this.celular = ''),
    };

    alert('lIMPANDO DADOS');
  }
}
