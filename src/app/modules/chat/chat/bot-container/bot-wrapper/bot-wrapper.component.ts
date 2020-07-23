import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { EventService } from 'src/app/core/services/event.service';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bot-wrapper',
  templateUrl: './bot-wrapper.component.html',
  styleUrls: ['./bot-wrapper.component.scss']
})
export class BotWrapperComponent implements OnInit, OnDestroy {

  @Input() command: BotCommand;

  subscription: Subscription;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.subscription = this.eventService.onMouseMove
      .subscribe(() => this.command.inputMousePosition(this.eventService.percentConfig));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
