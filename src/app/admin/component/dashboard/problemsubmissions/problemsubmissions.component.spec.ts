import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemsubmissionsComponent } from './problemsubmissions.component';

describe('ProblemsubmissionsComponent', () => {
  let component: ProblemsubmissionsComponent;
  let fixture: ComponentFixture<ProblemsubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemsubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemsubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
