import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpertosComponent } from './list-expertos.component';

describe('ListExpertosComponent', () => {
  let component: ListExpertosComponent;
  let fixture: ComponentFixture<ListExpertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExpertosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
