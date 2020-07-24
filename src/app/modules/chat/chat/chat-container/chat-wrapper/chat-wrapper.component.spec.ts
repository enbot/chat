import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWrapperComponent } from './chat-wrapper.component';

describe('ChatWrapperComponent', () => {
  let component: ChatWrapperComponent;
  let fixture: ComponentFixture<ChatWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
