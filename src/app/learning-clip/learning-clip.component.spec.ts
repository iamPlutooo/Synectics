import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningClipComponent } from './learning-clip.component';

describe('LearningClipComponent', () => {
  let component: LearningClipComponent;
  let fixture: ComponentFixture<LearningClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearningClipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
