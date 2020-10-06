import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoUnicoComponent } from './produto-unico.component';

describe('ProdutoUnicoComponent', () => {
  let component: ProdutoUnicoComponent;
  let fixture: ComponentFixture<ProdutoUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
