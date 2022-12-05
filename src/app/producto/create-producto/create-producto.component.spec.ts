import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductoComponent } from './create-producto.component';

describe('CreateProductoComponent', () => {
  let component: CreateProductoComponent;
  let fixture: ComponentFixture<CreateProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
