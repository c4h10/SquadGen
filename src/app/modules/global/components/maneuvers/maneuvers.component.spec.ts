import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManeuversComponent } from './maneuvers.component';

describe('ManeuversComponent', () => {
  let component: ManeuversComponent;
  let fixture: ComponentFixture<ManeuversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManeuversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManeuversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
