import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompetenciaComponent } from './update-competencia.component';

describe('UpdateCompetenciaComponent', () => {
  let component: UpdateCompetenciaComponent;
  let fixture: ComponentFixture<UpdateCompetenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompetenciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompetenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
