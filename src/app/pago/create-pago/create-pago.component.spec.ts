import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePagoComponent } from './create-pago.component';

describe('CreatePagoComponent', () => {
  let component: CreatePagoComponent;
  let fixture: ComponentFixture<CreatePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
