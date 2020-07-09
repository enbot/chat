import { Injectable } from '@angular/core';
import { BotCommand } from 'src/app/shared/interfaces/bot-command';
import { ChatCommand } from 'src/app/shared/interfaces/chat-command';
import { WallpaperCommand } from 'src/app/shared/interfaces/wallpaper-command';
import { CommandResolver } from 'src/app/shared/models/command-resolver';
import { Subject } from 'rxjs';
import { AllCommandsKey } from 'src/app/shared/interfaces/all-commands-key';

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
