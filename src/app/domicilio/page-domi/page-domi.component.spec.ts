import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDomiComponent } from './page-domi.component';

describe('PageDomiComponent', () => {
  let component: PageDomiComponent;
  let fixture: ComponentFixture<PageDomiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageDomiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDomiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
