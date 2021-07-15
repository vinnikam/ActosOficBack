import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFuncioComponent } from './crear-funcio.component';

describe('CrearFuncioComponent', () => {
  let component: CrearFuncioComponent;
  let fixture: ComponentFixture<CrearFuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearFuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearFuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
