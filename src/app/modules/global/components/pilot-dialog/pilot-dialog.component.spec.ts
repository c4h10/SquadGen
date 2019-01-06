import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotDialogComponent } from './pilot-dialog.component';

describe('PilotDialogComponent', () => {
  let component: PilotDialogComponent;
  let fixture: ComponentFixture<PilotDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
