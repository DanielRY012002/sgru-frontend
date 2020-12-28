import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompLineaComponent } from './list-comp-linea.component';

describe('ListCompLineaComponent', () => {
  let component: ListCompLineaComponent;
  let fixture: ComponentFixture<ListCompLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCompLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCompLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
