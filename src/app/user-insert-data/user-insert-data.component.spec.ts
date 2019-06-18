import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInsertDataComponent } from './user-insert-data.component';

describe('UserInsertDataComponent', () => {
  let component: UserInsertDataComponent;
  let fixture: ComponentFixture<UserInsertDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInsertDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInsertDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
