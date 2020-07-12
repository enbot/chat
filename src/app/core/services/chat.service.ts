import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CommandService } from './command.service';
import { HttpService } from './http.service';
import { ChatMessage } from '../../shared/models/general-config/chat-message';
import { AllCommandsKey } from 'src/app/shared/interfaces/all-commands-key';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    public readonly onSend: Subject<ChatMessage>;

    public readonly onReceive: Subject<ChatMessage>;

    public readonly onError: Subject<Error>;

    constructor(
        private commandService: CommandService,
        private httpService: HttpService,
    ) {
        this.onSend = new Subject();
        this.onReceive = new Subject();
        this.onError = new Subject();
    }

    public input(content: string): void {
        const isCommand = this.commandService.isCommand(content);
        if (isCommand) {
            this.commandService.runCommand(content as AllCommandsKey);
        } else {
            const request = { content };
            this.httpService.post('/message', request)
                .subscribe(response => {
                    const sentMessage = new ChatMessage(request.content, 'you', 'left');
                    const receivedMessage = new ChatMessage(response.content, 'enbot', 'right');
                    this.onSend.next(sentMessage);
                    this.onReceive.next(receivedMessage);
                    this.commandService.runCommand(response.command);
                }, error => this.onError.next(error));
        }
    }

    public test(): void {
        console.log('normal');
        this.input('CHANGE_STATE_NORMAL');
        setTimeout(() => {
            console.log('angry');
            this.input('CHANGE_STATE_ANGRY');
        }, 4000);
    }

}
