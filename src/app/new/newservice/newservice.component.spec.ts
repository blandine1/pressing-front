import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewserviceComponent } from './newservice.component';

describe('NewserviceComponent', () => {
  let component: NewserviceComponent;
  let fixture: ComponentFixture<NewserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewserviceComponent]
    });
    fixture = TestBed.createComponent(NewserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
