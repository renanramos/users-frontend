import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayDataComponent } from './user-display-data.component';

describe('UserDisplayDataComponent', () => {
  let component: UserDisplayDataComponent;
  let fixture: ComponentFixture<UserDisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDisplayDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
