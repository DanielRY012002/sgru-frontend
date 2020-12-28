import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdministrativaComponent } from './vista-administrativa.component';

describe('VistaAdministrativaComponent', () => {
  let component: VistaAdministrativaComponent;
  let fixture: ComponentFixture<VistaAdministrativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaAdministrativaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdministrativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
