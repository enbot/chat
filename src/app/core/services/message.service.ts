import { Injectable } from '@angular/core';
import { CommandService } from './command.service';
import { TypeCommand } from 'src/app/shared/interfaces/type-command';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private commandService: CommandService
  ) { }

  public input(text: string): void {

    text = 'COMMAND_HAPPY_TO_SAD';

    const isValidCommand = this.commandService.isCommand(text);

    if (isValidCommand) {
      this.commandService.runCommand(text as TypeCommand);
    }

  }

}
