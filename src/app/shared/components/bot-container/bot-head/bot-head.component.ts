import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-command';
import { EventService } from 'src/app/core/services/event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bot-head',
  templateUrl: './bot-head.component.html',
  styleUrls: ['./bot-head.component.scss']
})
export class BotHeadComponent implements OnInit, OnDestroy {

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
