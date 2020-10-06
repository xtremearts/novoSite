import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCabecalhoComponent } from './buscar-cabecalho.component';

describe('BuscarCabecalhoComponent', () => {
  let component: BuscarCabecalhoComponent;
  let fixture: ComponentFixture<BuscarCabecalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCabecalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
