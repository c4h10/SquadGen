import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListContainerComponent } from './squad-list-container.component';

describe('SquadListContainerComponent', () => {
  let component: SquadListContainerComponent;
  let fixture: ComponentFixture<SquadListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
