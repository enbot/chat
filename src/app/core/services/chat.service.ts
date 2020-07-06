import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TypeCommand } from 'src/app/shared/interfaces/type-command';
import { BotCommand } from '../../shared/models/bot-command';
import { ChatMessage } from '../../shared/models/chat-message';
import { CommandService } from './command.service';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public readonly onSend: Subject<ChatMessage>;

  public readonly onReceive: Subject<ChatMessage>;

  public readonly onError: Subject<Error>;

  constructor(
    private commandService: CommandService,
    private httpService: HttpService
  ) {
    this.onSend = new Subject();
    this.onReceive = new Subject();
    this.onError = new Subject();
  }

  public input(content: string): void {
    const isCommand = this.commandService.isCommand(content);
    if (isCommand) {
      this.commandService.runCommand(content as TypeCommand);
    } else {

      const request = { content };

      this.httpService.post('/message', request)

        .subscribe(response => {

          const selfMessage = new ChatMessage(request.content, 'you', 'left');
          const botMessage = new ChatMessage(response.content, 'enbot', 'right');

          this.onSend.next(selfMessage);
          this.onReceive.next(botMessage);

          this.commandService.runCommand(response.command);

        }, error => this.onError.next(error));

    }
  }

}
