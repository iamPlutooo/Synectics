import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynIntroduceComponent } from './syn-introduce.component';

describe('SynIntroduceComponent', () => {
  let component: SynIntroduceComponent;
  let fixture: ComponentFixture<SynIntroduceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynIntroduceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynIntroduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
