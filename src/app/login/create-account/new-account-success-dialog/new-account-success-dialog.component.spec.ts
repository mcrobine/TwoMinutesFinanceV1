import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAccountSuccessDialogComponent } from './new-account-success-dialog.component';

describe('NewAccountSuccessDialogComponent', () => {
  let component: NewAccountSuccessDialogComponent;
  let fixture: ComponentFixture<NewAccountSuccessDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAccountSuccessDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAccountSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
