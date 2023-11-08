import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewproduitComponent } from './newproduit.component';

describe('NewproduitComponent', () => {
  let component: NewproduitComponent;
  let fixture: ComponentFixture<NewproduitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewproduitComponent]
    });
    fixture = TestBed.createComponent(NewproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
