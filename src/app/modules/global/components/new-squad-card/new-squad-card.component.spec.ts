import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSquadCardComponent } from './new-squad-card.component';

describe('NewSquadCardComponent', () => {
  let component: NewSquadCardComponent;
  let fixture: ComponentFixture<NewSquadCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSquadCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSquadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
