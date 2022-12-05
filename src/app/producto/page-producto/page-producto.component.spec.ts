import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProductoComponent } from './page-producto.component';

describe('PageProductoComponent', () => {
  let component: PageProductoComponent;
  let fixture: ComponentFixture<PageProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProductoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
