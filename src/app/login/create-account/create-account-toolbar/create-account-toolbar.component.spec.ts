import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountToolbarComponent } from './create-account-toolbar.component';

describe('CreateAccountToolbarComponent', () => {
  let component: CreateAccountToolbarComponent;
  let fixture: ComponentFixture<CreateAccountToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAccountToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
