import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotTalkComponent } from './bot-talk.component';

describe('BotTalkComponent', () => {
  let component: BotTalkComponent;
  let fixture: ComponentFixture<BotTalkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotTalkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
