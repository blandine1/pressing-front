import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittrueComponent } from './edittrue.component';

describe('EdittrueComponent', () => {
  let component: EdittrueComponent;
  let fixture: ComponentFixture<EdittrueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EdittrueComponent]
    });
    fixture = TestBed.createComponent(EdittrueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
