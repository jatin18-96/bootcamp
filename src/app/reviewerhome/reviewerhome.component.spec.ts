import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewerhomeComponent } from './reviewerhome.component';

describe('ReviewerhomeComponent', () => {
  let component: ReviewerhomeComponent;
  let fixture: ComponentFixture<ReviewerhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewerhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
