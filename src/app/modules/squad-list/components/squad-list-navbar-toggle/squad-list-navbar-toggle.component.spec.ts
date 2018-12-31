import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListNavbarToggleComponent } from './squad-list-navbar-toggle.component';

describe('SquadListNavbarToggleComponent', () => {
  let component: SquadListNavbarToggleComponent;
  let fixture: ComponentFixture<SquadListNavbarToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListNavbarToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListNavbarToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
