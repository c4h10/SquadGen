import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadPilotHeaderComponent } from './squad-pilot-header.component';

describe('SquadPilotHeaderComponent', () => {
  let component: SquadPilotHeaderComponent;
  let fixture: ComponentFixture<SquadPilotHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadPilotHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadPilotHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
