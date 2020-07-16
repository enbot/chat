import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotEyeLeftComponent } from './bot-eye-left.component';

describe('BotEyeLeftComponent', () => {
  let component: BotEyeLeftComponent;
  let fixture: ComponentFixture<BotEyeLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotEyeLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotEyeLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
