import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListSideNavComponent } from './squad-list-side-nav.component';

describe('SquadListNavComponent', () => {
  let component: SquadListSideNavComponent;
  let fixture: ComponentFixture<SquadListSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
