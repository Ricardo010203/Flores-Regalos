import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePagoComponent } from './page-pago.component';

describe('PagePagoComponent', () => {
  let component: PagePagoComponent;
  let fixture: ComponentFixture<PagePagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
