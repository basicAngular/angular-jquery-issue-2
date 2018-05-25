import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceSettingComponent } from './conference-setting.component';

describe('ConferenceSettingComponent', () => {
  let component: ConferenceSettingComponent;
  let fixture: ComponentFixture<ConferenceSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConferenceSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
