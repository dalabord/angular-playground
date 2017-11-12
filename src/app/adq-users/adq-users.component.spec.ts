import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdqUsersComponent } from './adq-users.component';

describe('AdqUsersComponent', () => {
  let component: AdqUsersComponent;
  let fixture: ComponentFixture<AdqUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdqUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdqUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
