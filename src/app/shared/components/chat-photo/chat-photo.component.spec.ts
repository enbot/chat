import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPhotoComponent } from './chat-photo.component';

describe('ChatPhotoComponent', () => {
  let component: ChatPhotoComponent;
  let fixture: ComponentFixture<ChatPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
