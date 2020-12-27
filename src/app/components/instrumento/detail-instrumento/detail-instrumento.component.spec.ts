import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailInstrumentoComponent } from './detail-instrumento.component';

describe('DetailInstrumentoComponent', () => {
  let component: DetailInstrumentoComponent;
  let fixture: ComponentFixture<DetailInstrumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailInstrumentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailInstrumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
