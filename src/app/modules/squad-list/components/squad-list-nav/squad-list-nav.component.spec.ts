import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadListNavComponent } from './squad-list-nav.component';

describe('SquadListNavComponent', () => {
  let component: SquadListNavComponent;
  let fixture: ComponentFixture<SquadListNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadListNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadListNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
