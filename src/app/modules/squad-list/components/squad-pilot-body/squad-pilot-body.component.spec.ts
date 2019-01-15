import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadPilotBodyComponent } from './squad-pilot-body.component';

describe('SquadPilotBodyComponent', () => {
  let component: SquadPilotBodyComponent;
  let fixture: ComponentFixture<SquadPilotBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadPilotBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadPilotBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
