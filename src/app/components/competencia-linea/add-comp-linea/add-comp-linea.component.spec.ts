import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompLineaComponent } from './add-comp-linea.component';

describe('AddCompLineaComponent', () => {
  let component: AddCompLineaComponent;
  let fixture: ComponentFixture<AddCompLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
