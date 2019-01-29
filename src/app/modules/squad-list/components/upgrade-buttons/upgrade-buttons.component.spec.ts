import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeButtonsComponent } from './upgrade-buttons.component';

describe('UpgradeButtonsComponent', () => {
  let component: UpgradeButtonsComponent;
  let fixture: ComponentFixture<UpgradeButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
