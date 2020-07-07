import { Injectable } from '@angular/core';
import { TypeCommand } from '../../shared/interfaces/type-command';
import { AppCommand } from 'src/app/shared/models/app-command';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly onCommand: Subject<AppCommand>;

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

  public isCommand(text: string): boolean {
    const command = text as TypeCommand;
    const commandList = this.commandList;
    const commandIndex = commandList.indexOf(command);
    const isCommand = commandIndex !== -1;
    return isCommand;
  }

  public runCommand(command: TypeCommand): void {
    const botCommand = new AppCommand(command);
    this.onCommand.next(botCommand);
  }

}
