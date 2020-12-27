import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHabilidadesComponent } from './list-habilidades.component';

describe('ListHabilidadesComponent', () => {
  let component: ListHabilidadesComponent;
  let fixture: ComponentFixture<ListHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
