import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFuncioComponent } from './editar-funcio.component';

describe('EditarFuncioComponent', () => {
  let component: EditarFuncioComponent;
  let fixture: ComponentFixture<EditarFuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarFuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarFuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
