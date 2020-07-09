import { Injectable } from '@angular/core';
import { TypeCommand } from '../../shared/interfaces/type-command';
import { AppCommand } from 'src/app/shared/models/app-command';
import { BotCommand } from 'src/app/shared/interfaces/bot-command';
import { ChatCommand } from 'src/app/shared/interfaces/chat-command';
import { WallpaperCommand } from 'src/app/shared/interfaces/wallpaper-command';
import { CommandResolver } from 'src/app/shared/models/command-resolver';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly onBotCommand: Subject<BotCommand>;

  public readonly onChatCommand: Subject<ChatCommand>;

  public readonly onWallpaperCommand: Subject<WallpaperCommand>;

  constructor() {
    this.onBotCommand = new Subject();
    this.onChatCommand = new Subject();
    this.onWallpaperCommand = new Subject();
  }

  public isCommand(command: string): boolean {
    return CommandResolver.resolve(command) ? true : false;
  }

  public runCommand(command: TypeCommand): void {

    // const enums = CommandResolver.resolve(command);
    // const worker = CommandResolver.assemble(enums[0]);

    // const emitter = enums[] +

    // const botCommand = new AppCommand(command);
    // this.onCommand.next(botCommand);

  }

}
