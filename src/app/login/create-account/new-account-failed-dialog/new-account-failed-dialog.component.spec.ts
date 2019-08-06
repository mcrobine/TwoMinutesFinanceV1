import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountFailedDialogComponent } from './new-account-failed-dialog.component';

describe('NewAccountFailedDialogComponent', () => {
  let component: NewAccountFailedDialogComponent;
  let fixture: ComponentFixture<NewAccountFailedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountFailedDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountFailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
