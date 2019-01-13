import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialsViewComponent } from './dials-view.component';

describe('DialsViewComponent', () => {
  let component: DialsViewComponent;
  let fixture: ComponentFixture<DialsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
