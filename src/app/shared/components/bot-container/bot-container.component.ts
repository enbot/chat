import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { CommandService } from 'src/app/core/services/command.service';
import { BotCommand } from '../../interfaces/bot-command';
import { BotStateNormal } from '../../models/command-states';

@Component({
  selector: 'app-bot-container',
  templateUrl: './bot-container.component.html',
  styleUrls: ['./bot-container.component.scss']
})
export class BotContainerComponent implements OnInit, OnDestroy {

  command: BotCommand = new BotStateNormal();

  subscription: Subscription;

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {
    this.subscription = this.commandService.botCommand
      .pipe(debounce(() => interval(400)))
      .subscribe(command => this.command = command);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
