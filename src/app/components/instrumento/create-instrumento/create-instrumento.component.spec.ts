import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInstrumentoComponent } from './create-instrumento.component';

describe('CreateInstrumentoComponent', () => {
  let component: CreateInstrumentoComponent;
  let fixture: ComponentFixture<CreateInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateInstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
