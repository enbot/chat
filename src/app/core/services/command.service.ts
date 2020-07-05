import { Injectable } from '@angular/core';
import { TypeCommand } from '../../shared/interfaces/type-command';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly onCommand: Subject<TypeCommand>;

  public readonly commandsList: TypeCommand[];

  constructor() {
    this.onCommand = new Subject();
    this.commandsList = [];
  }

  public isCommand(text: string): boolean {
    return this.commandsList.indexOf(text as TypeCommand) !== -1;
  }

  public runCommand(text: TypeCommand): void {
    this.onCommand.next(text);
  }

}
