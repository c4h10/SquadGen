import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsLineComponent } from './actions-line.component';

describe('ActionsLineComponent', () => {
  let component: ActionsLineComponent;
  let fixture: ComponentFixture<ActionsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
