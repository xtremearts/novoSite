import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloPaginasComponent } from './titulo-paginas.component';

describe('TituloPaginasComponent', () => {
  let component: TituloPaginasComponent;
  let fixture: ComponentFixture<TituloPaginasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloPaginasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloPaginasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
