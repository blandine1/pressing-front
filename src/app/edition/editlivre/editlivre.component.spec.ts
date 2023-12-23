import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditlivreComponent } from './editlivre.component';

describe('EditlivreComponent', () => {
  let component: EditlivreComponent;
  let fixture: ComponentFixture<EditlivreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditlivreComponent]
    });
    fixture = TestBed.createComponent(EditlivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
