import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotHeadComponent } from './bot-head.component';

describe('BotHeadComponent', () => {
  let component: BotHeadComponent;
  let fixture: ComponentFixture<BotHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
