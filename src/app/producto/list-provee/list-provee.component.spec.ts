import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProveeComponent } from './list-provee.component';

describe('ListProveeComponent', () => {
  let component: ListProveeComponent;
  let fixture: ComponentFixture<ListProveeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProveeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProveeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
