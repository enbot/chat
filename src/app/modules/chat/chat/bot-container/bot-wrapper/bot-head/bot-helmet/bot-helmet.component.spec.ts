import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotHelmetComponent } from './bot-helmet.component';

describe('BotHelmetComponent', () => {
  let component: BotHelmetComponent;
  let fixture: ComponentFixture<BotHelmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotHelmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotHelmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
