import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompLineaComponent } from './update-comp-linea.component';

describe('UpdateCompLineaComponent', () => {
  let component: UpdateCompLineaComponent;
  let fixture: ComponentFixture<UpdateCompLineaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCompLineaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCompLineaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
