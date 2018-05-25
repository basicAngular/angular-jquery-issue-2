import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingSettingComponent } from './booking-setting.component';

describe('BookingSettingComponent', () => {
  let component: BookingSettingComponent;
  let fixture: ComponentFixture<BookingSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
