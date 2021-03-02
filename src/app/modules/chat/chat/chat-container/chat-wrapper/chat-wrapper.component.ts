import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommandService } from 'src/app/core/services/command.service';
import { ChatService } from 'src/app/modules/chat/services/chat.service';
import { ChatMessage } from 'src/app/shared/models/chat/chat-message';
import { ChatBalloon } from 'src/app/shared/interfaces/chat-balloon';
import { Subscription } from 'rxjs';
import { ChatCommand } from 'src/app/shared/interfaces/chat-types';

@Component({
    selector: 'app-chat-wrapper',
    templateUrl: './chat-wrapper.component.html',
    styleUrls: ['./chat-wrapper.component.scss']
})
export class ChatWrapperComponent implements OnInit, OnDestroy {

    public balloons: ChatBalloon[];

    private receiveSubscription: Subscription;
    private sendSubscription: Subscription;
    private errorSubscription: Subscription;

    constructor(
        private chatService: ChatService,
        private commandService: CommandService,
    ) {
        this.balloons = [];
    }

    public ngOnInit(): void {
        this.sendSubscription = this.chatService.onMessage
            .subscribe((message: ChatMessage) => this.handleNewChatMessage(message));
        this.errorSubscription = this.chatService.onError
            .subscribe((error: Error) => this.handleChatError(error));
    }

    public handleNewChatMessage(message: ChatMessage): void {
        const key = this.commandService.resolveCommand('chat', message.content);
        const command = this.commandService.resolveInstance(key).instance as ChatCommand;

        this.balloons.push({
            message,
            command,
        });
    }

    public handleChatError(error: Error): void {
        console.log('error');
    }

    public ngOnDestroy(): void {
        if (this.receiveSubscription || this.sendSubscription || this.errorSubscription) {
            this.receiveSubscription.unsubscribe();
            this.sendSubscription.unsubscribe();
            this.errorSubscription.unsubscribe();
        }
    }

}
