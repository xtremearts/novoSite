import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiliaisIndexComponent } from './filiais-index.component';

describe('FiliaisIndexComponent', () => {
  let component: FiliaisIndexComponent;
  let fixture: ComponentFixture<FiliaisIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiliaisIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiliaisIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
