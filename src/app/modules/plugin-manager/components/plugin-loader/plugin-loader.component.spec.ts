import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginLoaderComponent } from './plugin-loader.component';

describe('PluginLoaderComponent', () => {
  let component: PluginLoaderComponent;
  let fixture: ComponentFixture<PluginLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PluginLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
