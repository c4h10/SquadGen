import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListSideNavSectionComponent } from './squad-list-side-nav-section.component';

describe('SquadListNavSectionComponent', () => {
  let component: SquadListSideNavSectionComponent;
  let fixture: ComponentFixture<SquadListSideNavSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListSideNavSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListSideNavSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
