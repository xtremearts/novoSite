import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDestaqueIndexComponent } from './produto-destaque-index.component';

describe('ProdutoDestaqueIndexComponent', () => {
  let component: ProdutoDestaqueIndexComponent;
  let fixture: ComponentFixture<ProdutoDestaqueIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDestaqueIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDestaqueIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
