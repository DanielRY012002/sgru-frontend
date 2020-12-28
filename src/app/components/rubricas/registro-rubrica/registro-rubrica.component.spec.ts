import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroRubricaComponent } from './registro-rubrica.component';

describe('RegistroRubricaComponent', () => {
  let component: RegistroRubricaComponent;
  let fixture: ComponentFixture<RegistroRubricaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroRubricaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroRubricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
