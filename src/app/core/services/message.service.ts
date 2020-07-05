import { Injectable } from '@angular/core';
import { CommandService } from './command.service';
import { TypeCommand } from 'src/app/shared/interfaces/type-command';
import { ChatMessage } from '../../shared/models/chat-message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public readonly onSend: Subject<ChatMessage>;
  
  public readonly onReceive: Subject<ChatMessage>;


  constructor(
    private commandService: CommandService
  ) { }

  public input(text: string): void {

    // http.post bot /message

    // const response = new BotResponse(

    // )

    const isValidCommand = this.commandService.isCommand(text);

    if (isValidCommand) {
      this.commandService.runCommand(text as TypeCommand);
    }

  }

  public test(): void { // TEMP

  }

}
