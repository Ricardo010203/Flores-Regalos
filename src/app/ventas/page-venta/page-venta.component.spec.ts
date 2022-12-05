import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVentaComponent } from './page-venta.component';

describe('PageVentaComponent', () => {
  let component: PageVentaComponent;
  let fixture: ComponentFixture<PageVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
