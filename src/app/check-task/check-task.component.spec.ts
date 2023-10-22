import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckTaskComponent } from './check-task.component';

describe('CheckTaskComponent', () => {
  let component: CheckTaskComponent;
  let fixture: ComponentFixture<CheckTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckTaskComponent]
    });
    fixture = TestBed.createComponent(CheckTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
