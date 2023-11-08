import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltrueComponent } from './alltrue.component';

describe('AlltrueComponent', () => {
  let component: AlltrueComponent;
  let fixture: ComponentFixture<AlltrueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlltrueComponent]
    });
    fixture = TestBed.createComponent(AlltrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
