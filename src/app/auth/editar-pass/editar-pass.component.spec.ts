import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPassComponent } from './editar-pass.component';

describe('EditarPassComponent', () => {
  let component: EditarPassComponent;
  let fixture: ComponentFixture<EditarPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
