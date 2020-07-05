import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBalloonComponent } from './chat-balloon.component';

describe('ChatBalloonComponent', () => {
  let component: ChatBalloonComponent;
  let fixture: ComponentFixture<ChatBalloonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatBalloonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
