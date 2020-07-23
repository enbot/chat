import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotEyeRightComponent } from './bot-eye-right.component';

describe('BotEyeRightComponent', () => {
  let component: BotEyeRightComponent;
  let fixture: ComponentFixture<BotEyeRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotEyeRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotEyeRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
