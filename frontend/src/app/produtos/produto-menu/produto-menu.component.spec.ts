import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoMenuComponent } from './produto-menu.component';

describe('ProdutoMenuComponent', () => {
  let component: ProdutoMenuComponent;
  let fixture: ComponentFixture<ProdutoMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
