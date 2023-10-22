import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadUpdateComponent } from './load-update.component';

describe('LoadUpdateComponent', () => {
  let component: LoadUpdateComponent;
  let fixture: ComponentFixture<LoadUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadUpdateComponent]
    });
    fixture = TestBed.createComponent(LoadUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
