import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialDialogComponent } from './dial-dialog.component';

describe('DialDialogComponent', () => {
  let component: DialDialogComponent;
  let fixture: ComponentFixture<DialDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
