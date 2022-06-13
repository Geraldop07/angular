import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoCardComponent } from './listado-card.component';

describe('ListadoCardComponent', () => {
  let component: ListadoCardComponent;
  let fixture: ComponentFixture<ListadoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
