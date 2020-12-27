import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesiComponent } from './informesi.component';

describe('InformesiComponent', () => {
  let component: InformesiComponent;
  let fixture: ComponentFixture<InformesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
