import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaInstrumentoComponent } from './pregunta-instrumento.component';

describe('PreguntaInstrumentoComponent', () => {
  let component: PreguntaInstrumentoComponent;
  let fixture: ComponentFixture<PreguntaInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaInstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntaInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
