import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroresListaComponent } from './errores-lista.component';

describe('ErroresListaComponent', () => {
  let component: ErroresListaComponent;
  let fixture: ComponentFixture<ErroresListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroresListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroresListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
