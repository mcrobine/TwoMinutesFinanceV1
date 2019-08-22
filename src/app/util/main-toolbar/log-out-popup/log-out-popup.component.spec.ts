import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutPopupComponent } from './log-out-popup.component';

describe('LogOutPopupComponent', () => {
  let component: LogOutPopupComponent;
  let fixture: ComponentFixture<LogOutPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOutPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
