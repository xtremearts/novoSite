import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosLinhaIndexComponent } from './produtos-linha-index.component';

describe('ProdutosLinhaIndexComponent', () => {
  let component: ProdutosLinhaIndexComponent;
  let fixture: ComponentFixture<ProdutosLinhaIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutosLinhaIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosLinhaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
