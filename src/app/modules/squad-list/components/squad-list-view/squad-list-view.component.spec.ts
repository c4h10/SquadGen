import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListViewComponent } from './squad-list-view.component';

describe('SquadListViewComponent', () => {
  let component: SquadListViewComponent;
  let fixture: ComponentFixture<SquadListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
