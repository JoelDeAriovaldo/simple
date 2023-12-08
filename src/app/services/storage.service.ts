import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  formData: any;
  key: any = 'cursoionic';

  constructor() {}
  async armazenarDados(info: any) {
    await Preferences.set({
      key: this.key,
      value: JSON.stringify(info),
    });
  }
  async lerDados() {
    let info = await (await Preferences.get({ key: this.key })).value;
    this.formData = info;
    console.log('Dados', info);
  }

  async limparDat() {
      let result = await Preferences.get({ key: this.key });
      let info = result.value;
      this.formData = info;
      console.log('Dados', info);
  }
}
