import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EctPortfolioComponent } from './ect-portfolio.component';

describe('EctPortfolioComponent', () => {
  let component: EctPortfolioComponent;
  let fixture: ComponentFixture<EctPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EctPortfolioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EctPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
