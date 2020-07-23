import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotEyeSpaceComponent } from './bot-eye-space.component';

describe('BotEyeSpaceComponent', () => {
  let component: BotEyeSpaceComponent;
  let fixture: ComponentFixture<BotEyeSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotEyeSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotEyeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
