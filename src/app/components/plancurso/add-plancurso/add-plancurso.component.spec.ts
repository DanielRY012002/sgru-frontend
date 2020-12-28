import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlancursoComponent } from './add-plancurso.component';

describe('AddPlancursoComponent', () => {
  let component: AddPlancursoComponent;
  let fixture: ComponentFixture<AddPlancursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlancursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlancursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
