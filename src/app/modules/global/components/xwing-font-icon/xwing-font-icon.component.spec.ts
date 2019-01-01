import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XwingFontIconComponent } from './xwing-font-icon.component';

describe('XwingFontIconComponent', () => {
  let component: XwingFontIconComponent;
  let fixture: ComponentFixture<XwingFontIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XwingFontIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XwingFontIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
