import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-command';
import { EventService } from 'src/app/core/services/event.service';
import { Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-bot-eye-left',
  templateUrl: './bot-eye-left.component.html',
  styleUrls: ['./bot-eye-left.component.scss']
})
export class BotEyeLeftComponent implements OnInit, OnDestroy {

  @Input() command: BotCommand;

  subscription: Subscription;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.subscription = this.eventService.onMouseMove
      .subscribe(() => this.command.inputPosition(this.eventService.percentConfig));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
