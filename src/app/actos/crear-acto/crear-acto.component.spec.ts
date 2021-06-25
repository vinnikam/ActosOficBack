import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActoComponent } from './crear-acto.component';

describe('CrearActoComponent', () => {
  let component: CrearActoComponent;
  let fixture: ComponentFixture<CrearActoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
