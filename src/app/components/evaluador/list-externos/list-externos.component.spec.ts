import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExternosComponent } from './list-externos.component';

describe('ListExternosComponent', () => {
  let component: ListExternosComponent;
  let fixture: ComponentFixture<ListExternosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListExternosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExternosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
