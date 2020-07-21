import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotFaceSpacingComponent } from './bot-face-spacing.component';

describe('BotFaceSpacingComponent', () => {
  let component: BotFaceSpacingComponent;
  let fixture: ComponentFixture<BotFaceSpacingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotFaceSpacingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotFaceSpacingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
