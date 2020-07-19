import { Injectable } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';
import { ChatCommand } from 'src/app/shared/interfaces/chat-types';
import { WallpaperCommand } from 'src/app/shared/interfaces/wallpaper-types';
import { CommandResolver } from 'src/app/shared/models/general-config/command-resolver';
import { AllCommandsKey } from 'src/app/shared/interfaces/command-types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly botCommand: Subject<BotCommand>;

  public readonly chatCommand: Subject<ChatCommand>;

  public readonly wallpaperCommand: Subject<WallpaperCommand>;

  constructor() {
    this.botCommand = new Subject();
    this.chatCommand = new Subject();
    this.wallpaperCommand = new Subject();
  }

  public isCommand(command: string): boolean {
    return CommandResolver.resolve(command as AllCommandsKey).valid;
  }

  public runCommand(command: AllCommandsKey): void {
    const resolved = CommandResolver.resolve(command);
    if (resolved.valid) {
      const listName = resolved.list;
      const keyName = resolved.key;
      const instance = CommandResolver.assemble(listName, keyName);
      const subjectName = `${listName}Command`;
      const subjectEmitter = this[subjectName];
      subjectEmitter.next(instance);
    }
  }

}
