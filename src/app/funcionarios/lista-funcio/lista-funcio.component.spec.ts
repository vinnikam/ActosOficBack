import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFuncioComponent } from './lista-funcio.component';

describe('ListaFuncioComponent', () => {
  let component: ListaFuncioComponent;
  let fixture: ComponentFixture<ListaFuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaFuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
