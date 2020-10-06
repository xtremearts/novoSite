import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPaginaComponent } from './index-pagina.component';

describe('IndexPaginaComponent', () => {
  let component: IndexPaginaComponent;
  let fixture: ComponentFixture<IndexPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
