import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccountGeneralComponent } from './my-account-general.component';

describe('MyAccountGeneralComponent', () => {
  let component: MyAccountGeneralComponent;
  let fixture: ComponentFixture<MyAccountGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccountGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccountGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
