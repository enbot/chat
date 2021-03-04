import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { BotState } from 'src/app/shared/models/bot/bot-state';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bot-wrapper',
  templateUrl: './bot-wrapper.component.html',
  styleUrls: ['./bot-wrapper.component.scss']
})
export class BotWrapperComponent implements OnInit, OnDestroy {

  @Input() command: BotState;

  subscription: Subscription;

  constructor(private eventService: EventService) { }

  public ngOnInit(): void {
    this.subscription = this.eventService.onMouseMove
      .subscribe(() => this.command.inputMousePosition(this.eventService.percentConfig));
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
