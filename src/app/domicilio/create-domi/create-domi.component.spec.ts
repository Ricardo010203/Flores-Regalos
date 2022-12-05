import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDomiComponent } from './create-domi.component';

describe('CreateDomiComponent', () => {
  let component: CreateDomiComponent;
  let fixture: ComponentFixture<CreateDomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDomiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
