import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountHeaderComponent } from './create-account-header.component';

describe('CreateAccountHeaderComponent', () => {
  let component: CreateAccountHeaderComponent;
  let fixture: ComponentFixture<CreateAccountHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
