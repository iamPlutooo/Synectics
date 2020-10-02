import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynWithcreComponent } from './syn-withcre.component';

describe('SynWithcreComponent', () => {
  let component: SynWithcreComponent;
  let fixture: ComponentFixture<SynWithcreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynWithcreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynWithcreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
