import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesgComponent } from './informesg.component';

describe('InformesgComponent', () => {
  let component: InformesgComponent;
  let fixture: ComponentFixture<InformesgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
