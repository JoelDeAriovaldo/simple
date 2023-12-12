import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  formGroup!: FormGroup;
  nome: any;
  celular: any;
  pic: any;
  linkAtivo = false;

  constructor(private fb: FormBuilder, private storage: StorageService) {}

  ngOnInit() {
    this.formGroup = this.fb.group({
      pic: ['', Validators.required],
      nome: ['', Validators.required],
      celular: ['', Validators.required],
    });
  }

  onSubmit() {
    let info;
    let nome = this.formGroup.get('nome')?.value;
    let celular = this.formGroup.get('celular')?.value;
    let pic = this.formGroup.get('pic')?.value;

    info = {
      nome,
      celular,
      pic,
    };

    this.storage.armazenarDados(info);

    this.storage.FormGroup = info;
    this.linkAtivo = true;
  }

  selImg(event: any) {
    let fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      let imagem = fileInput.files[0];
      this.pic = URL.createObjectURL(imagem);
    }
  }
}
