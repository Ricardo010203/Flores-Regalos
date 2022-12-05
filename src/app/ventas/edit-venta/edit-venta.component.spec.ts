import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVentaComponent } from './edit-venta.component';

describe('EditVentaComponent', () => {
  let component: EditVentaComponent;
  let fixture: ComponentFixture<EditVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
