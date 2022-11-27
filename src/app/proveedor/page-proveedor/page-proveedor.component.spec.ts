import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProveedorComponent } from './page-proveedor.component';

describe('PageProveedorComponent', () => {
  let component: PageProveedorComponent;
  let fixture: ComponentFixture<PageProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProveedorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
