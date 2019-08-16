import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarToogleComponent } from './side-bar-toogle.component';

describe('SideBarToogleComponent', () => {
  let component: SideBarToogleComponent;
  let fixture: ComponentFixture<SideBarToogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarToogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarToogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
