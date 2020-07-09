import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { CommandService } from 'src/app/core/services/command.service';
import { BotCommand } from '../../interfaces/bot-command';

@Component({
  selector: 'app-bot-container',
  templateUrl: './bot-container.component.html',
  styleUrls: ['./bot-container.component.scss']
})
export class BotContainerComponent implements OnInit, OnDestroy {

  commandInEffect: BotCommand;

  commandSubscription: Subscription;

  constructor(private commandService: CommandService) { }

  ngOnInit(): void {

    this.commandSubscription = this.commandService.botCommand

      .pipe(debounce(() => interval(400)))

      .subscribe(command => {
        console.log(command)
        this.commandInEffect = command
      });

  }

  ngOnDestroy(): void {
    if (this.commandSubscription) {
      this.commandSubscription.unsubscribe();
    }
  }

}
