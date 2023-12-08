import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-ver-dados',
  templateUrl: './ver-dados.page.html',
  styleUrls: ['./ver-dados.page.scss'],
})
export class VerDadosPage implements OnInit {
  constructor(
    public storage: StorageService
    ) {}

  ngOnInit() {}
}
