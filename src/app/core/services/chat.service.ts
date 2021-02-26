import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommandService } from './command.service';
import { ChatMessage } from 'src/app/shared/models/general-config/chat-message';
import { AllCommandsKey } from 'src/app/shared/interfaces/command-types';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    public readonly onSend: Subject<ChatMessage>;
    public readonly onReceive: Subject<ChatMessage>;
    public readonly onError: Subject<Error>;

    constructor(
        private commandService: CommandService,
    ) {
        this.onSend = new Subject();
        this.onReceive = new Subject();
        this.onError = new Subject();
    }

    public async input(content: string): Promise<void> {
        const isCommand = this.commandService.isCommand(content);
        if (isCommand) {
            this.commandService.runCommand(content as AllCommandsKey);
        } else {
            // const request = { content };
            // this.httpClient.post('/message', request)
            //     .subscribe(response => {
            //         const sentMessage = new ChatMessage(request.content, 'you', 'left');
            //         const receivedMessage = new ChatMessage(response.content, 'enbot', 'right');
            //         this.onSend.next(sentMessage);
            //         this.onReceive.next(receivedMessage);
            //         this.commandService.runCommand(response.command);
            //     }, error => this.onError.next(error));
        }
    }
}
