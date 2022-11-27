import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProveedorComponent } from './create-proveedor.component';

describe('CreateProveedorComponent', () => {
  let component: CreateProveedorComponent;
  let fixture: ComponentFixture<CreateProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
