import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativaInstrumentoComponent } from './alternativa-instrumento.component';

describe('AlternativaInstrumentoComponent', () => {
  let component: AlternativaInstrumentoComponent;
  let fixture: ComponentFixture<AlternativaInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternativaInstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativaInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
