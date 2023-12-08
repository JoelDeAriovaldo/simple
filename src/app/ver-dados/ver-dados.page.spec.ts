import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerDadosPage } from './ver-dados.page';

describe('VerDadosPage', () => {
  let component: VerDadosPage;
  let fixture: ComponentFixture<VerDadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
