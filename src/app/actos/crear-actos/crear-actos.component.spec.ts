import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearActosComponent } from './crear-actos.component';

describe('CrearActosComponent', () => {
  let component: CrearActosComponent;
  let fixture: ComponentFixture<CrearActosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearActosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearActosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
