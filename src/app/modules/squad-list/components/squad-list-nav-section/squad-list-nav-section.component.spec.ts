import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListNavSectionComponent } from './squad-list-nav-section.component';

describe('SquadListNavSectionComponent', () => {
  let component: SquadListNavSectionComponent;
  let fixture: ComponentFixture<SquadListNavSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListNavSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListNavSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
