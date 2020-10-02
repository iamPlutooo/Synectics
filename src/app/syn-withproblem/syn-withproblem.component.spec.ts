import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynWithproblemComponent } from './syn-withproblem.component';

describe('SynWithproblemComponent', () => {
  let component: SynWithproblemComponent;
  let fixture: ComponentFixture<SynWithproblemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynWithproblemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynWithproblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
