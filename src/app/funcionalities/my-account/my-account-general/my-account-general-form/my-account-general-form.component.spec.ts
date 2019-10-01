import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountGeneralFormComponent } from './my-account-general-form.component';

describe('MyAccountGeneralFormComponent', () => {
  let component: MyAccountGeneralFormComponent;
  let fixture: ComponentFixture<MyAccountGeneralFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountGeneralFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountGeneralFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
