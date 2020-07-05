import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotContainerComponent } from './bot-container.component';

describe('BotContainerComponent', () => {
  let component: BotContainerComponent;
  let fixture: ComponentFixture<BotContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
