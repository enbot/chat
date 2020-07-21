import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotFaceComponent } from './bot-face.component';

describe('BotFaceComponent', () => {
  let component: BotFaceComponent;
  let fixture: ComponentFixture<BotFaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotFaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotFaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
