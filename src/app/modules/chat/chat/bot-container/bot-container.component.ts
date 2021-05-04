import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { BotStateNormal } from 'src/app/shared/models/bot/bot-normal';
import { CommandService } from 'src/app/core/services/command.service';
import { BotState } from 'src/app/shared/models/bot/bot-state';

@Component({
    selector: 'app-bot-container',
    templateUrl: './bot-container.component.html',
    styleUrls: ['./bot-container.component.scss']
})
export class BotContainerComponent implements OnInit, OnDestroy {
    public command: BotState = new BotStateNormal();
    private subscription: Subscription;

    constructor(private commandService: CommandService) { }

    public ngOnInit(): void {
        this.subscription = this.commandService.onBotChange
            .pipe(debounce(() => interval(400)))
            .subscribe(command => this.command = command);
    }

    public ngOnDestroy(): void {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
