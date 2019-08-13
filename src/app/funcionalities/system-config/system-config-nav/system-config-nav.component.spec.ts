import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemConfigNavComponent } from './system-config-nav.component';

describe('SystemConfigNavComponent', () => {
  let component: SystemConfigNavComponent;
  let fixture: ComponentFixture<SystemConfigNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemConfigNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemConfigNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
