import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialsContainerComponent } from './dials-container.component';

describe('DialsContainerComponent', () => {
  let component: DialsContainerComponent;
  let fixture: ComponentFixture<DialsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
