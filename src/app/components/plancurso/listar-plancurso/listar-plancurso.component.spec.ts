import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlancursoComponent } from './listar-plancurso.component';

describe('ListarPlancursoComponent', () => {
  let component: ListarPlancursoComponent;
  let fixture: ComponentFixture<ListarPlancursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPlancursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlancursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
