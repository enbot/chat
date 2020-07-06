import { Injectable } from '@angular/core';
import { TypeCommand } from '../../shared/interfaces/type-command';
import { BotCommand } from 'src/app/shared/models/bot-command';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly onCommand: Subject<TypeCommand>;

  public readonly commandList: TypeCommand[];

  constructor() {
    this.onCommand = new Subject();
    this.commandList = [
      'CHANGE_STATE_ANGRY',
      'CHANGE_STATE_HAPPY',
      'CHANGE_STATE_STAR',
      'CHANGE_STATE_SAD',
      'CHANGE_STATE_CLOSED',
      'CHANGE_STATE_BORED',
      'CHANGE_STATE_CAREFUL',
      'CHANGE_STATE_NORMAL',
    ];
  }

  public isCommand(command: string): boolean {
    return this.commandList.indexOf(command as TypeCommand) !== -1;
  }

  public runCommand(command: TypeCommand): void {

    const botCommand = new BotCommand(command);

    // const command = new BotCommand(text);

    // this.onCommand.next(command);
  }

}
