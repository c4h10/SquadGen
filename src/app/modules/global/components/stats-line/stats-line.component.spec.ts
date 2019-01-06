import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsLineComponent } from './stats-line.component';

describe('StatsLineComponent', () => {
  let component: StatsLineComponent;
  let fixture: ComponentFixture<StatsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
