import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinformesComponent } from './listinformes.component';

describe('ListinformesComponent', () => {
  let component: ListinformesComponent;
  let fixture: ComponentFixture<ListinformesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListinformesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinformesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
