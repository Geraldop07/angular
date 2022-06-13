import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransaccionComponent } from './create-transaccion.component';

describe('CreateTransaccionComponent', () => {
  let component: CreateTransaccionComponent;
  let fixture: ComponentFixture<CreateTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransaccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
