import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlancursoComponent } from './update-plancurso.component';

describe('UpdatePlancursoComponent', () => {
  let component: UpdatePlancursoComponent;
  let fixture: ComponentFixture<UpdatePlancursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlancursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlancursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
