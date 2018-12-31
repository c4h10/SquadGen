import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListNavbarComponent } from './squad-list-navbar.component';

describe('SquadListNavbarComponent', () => {
  let component: SquadListNavbarComponent;
  let fixture: ComponentFixture<SquadListNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
