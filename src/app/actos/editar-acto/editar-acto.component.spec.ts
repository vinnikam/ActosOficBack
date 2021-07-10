import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarActoComponent } from './editar-acto.component';

describe('EditarActoComponent', () => {
  let component: EditarActoComponent;
  let fixture: ComponentFixture<EditarActoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarActoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarActoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
