import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListNavSectionItemComponent } from './squad-list-nav-section-item.component';

describe('SquadListNavSectionItemComponent', () => {
  let component: SquadListNavSectionItemComponent;
  let fixture: ComponentFixture<SquadListNavSectionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListNavSectionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListNavSectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
