import { Injectable } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot-states/bot-state';
import { ChatCommand } from 'src/app/shared/interfaces/chat-types';
import { WallpaperCommand } from 'src/app/shared/interfaces/wallpaper-types';
import { CommandResolver } from 'src/app/shared/models/general-config/command-resolver';
import { AllCommandsKey } from 'src/app/shared/interfaces/command-types';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly botState: Subject<BotState>;

  public readonly chatState: Subject<ChatCommand>;

  public readonly wallpaperState: Subject<WallpaperCommand>;

  constructor() {
    this.botState = new Subject();
    this.chatState = new Subject();
    this.wallpaperState = new Subject();
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
      const subjectName = `${listName}State`;
      const subjectEmitter = this[subjectName];
      subjectEmitter.next(instance);
    }
  }

}
