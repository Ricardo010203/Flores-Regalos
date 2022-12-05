import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDomiComponent } from './list-domi.component';

describe('ListDomiComponent', () => {
  let component: ListDomiComponent;
  let fixture: ComponentFixture<ListDomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDomiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
