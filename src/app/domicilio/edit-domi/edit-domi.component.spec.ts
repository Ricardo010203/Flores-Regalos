import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDomiComponent } from './edit-domi.component';

describe('EditDomiComponent', () => {
  let component: EditDomiComponent;
  let fixture: ComponentFixture<EditDomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDomiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
