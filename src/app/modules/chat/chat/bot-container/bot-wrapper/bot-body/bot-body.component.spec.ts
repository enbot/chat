import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotBodyComponent } from './bot-body.component';

describe('BotBodyComponent', () => {
  let component: BotBodyComponent;
  let fixture: ComponentFixture<BotBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
