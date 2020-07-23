import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWrapperComponent } from './bot-wrapper.component';

describe('BotWrapperComponent', () => {
  let component: BotWrapperComponent;
  let fixture: ComponentFixture<BotWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
