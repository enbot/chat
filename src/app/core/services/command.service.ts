import { Injectable } from '@angular/core';
import { BotCommandList } from 'src/app/shared/interfaces/bot-types';
import { ChatCommandList } from 'src/app/shared/interfaces/chat-types';
import { WallpaperCommandList } from 'src/app/shared/interfaces/wallpaper-types';
import { makeBotCommands } from 'src/app/shared/factories/bot-command-factory';
import { makeChatCommands } from 'src/app/shared/factories/chat-command-factory';
import { makeWallpaperCommands } from 'src/app/shared/factories/wallpaper-command-factory';
import { AllCommandsKey, ResolvedCommand, AllCommandsListKey } from 'src/app/shared/interfaces/command-types';
import { WallpaperState } from 'src/app/shared/models/wallpaper-states/wallpaper-state';
import { BotState } from 'src/app/shared/models/bot-states/bot-state';
import { Subject } from 'rxjs';

// import { AllCommandsKey, AllCommandsListKey, TypeCommand, TypeCommandResolved } from 'src/app/shared/interfaces/command-types';
// import { CommandContainer } from './command-container';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly botCommandList: BotCommandList;
  public readonly chatCommandList: ChatCommandList;
  public readonly wallpaperCommandList: WallpaperCommandList;

  public readonly onBotChange: Subject<BotState>;
  public readonly onWallpaperChange: Subject<WallpaperState>;

  // <!-- bot commands -->
  // <!-- <button (click)="test('CHANGE_EMOTION_NORMAL')"> CHANGE_EMOTION_NORMAL </button> -->
  // <!-- <button (click)="test('CHANGE_EMOTION_ANGRY')"> CHANGE_EMOTION_ANGRY </button> -->
  // <!-- <button (click)="test('CHANGE_EMOTION_SAD')"> CHANGE_EMOTION_SAD </button> -->
  // <!-- <button (click)="test('CHANGE_EMOTION_HAPPY')"> CHANGE_EMOTION_HAPPY </button> -->
  // <!-- <button (click)="test('CHANGE_EMOTION_BORED')"> CHANGE_EMOTION_BORED </button> -->
  // <!-- <button (click)="test('CHANGE_EMOTION_CAREFUL')"> CHANGE_EMOTION_CAREFUL </button> -->
  // <!-- <button (click)="test('CHANGE_EMOTION_CONFUSED')"> CHANGE_EMOTION_CONFUSED </button> -->

  // <!-- wallpaper commands -->
  // <!-- <button (click)="test('CHANGE_SCENARIO_FOREST')"> CHANGE_SCENARIO_FOREST </button> -->
  // <!-- <button class="disabled"> CHANGE_SCENARIO_SNOW </button> (click)="test('CHANGE_SCENARIO_SNOW')" -->

  constructor() {
    this.botCommandList = makeBotCommands();
    this.chatCommandList = makeChatCommands();
    this.wallpaperCommandList = makeWallpaperCommands();
    this.onBotChange = new Subject();
    this.onWallpaperChange = new Subject();
  }

  public isCommand(command: string): boolean {
    return CommandResolver.resolve(command as AllCommandsKey).valid;
  }

  public getCommandKey(aaaa, bbbb) {
    // TODO: change "AllCommandsX" to "AnyCommandX" or something like that
  }

  public getCommandInstance(command: AllCommandsKey) {

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

  // private assembleCommand() {
  //   public static assemble(listKey: AllCommandsListKey, commandKey: AllCommandsKey): TypeCommand {
  //     return CommandContainer[listKey][commandKey];
  //   }
  // }

  private resolveCommand(commandKey: AllCommandsKey): ResolvedCommand {
    const botCommandList = this.botCommandList;
    const chatCommandList = this.chatCommandList;
    const wallpaperCommandList = this.wallpaperCommandList;

    const lists = [
      { type: 'bot', commands: botCommandList },
      { type: 'chat', commands: chatCommandList },
      { type: 'wallpaper', commands: wallpaperCommandList },
    ];

    for (const list of lists) {

      console.log(list);

      const commandList = list.commands;
      const commandType = list.type as AllCommandsListKey;
      const commandKeys = Object.keys(commandList);
      const commandIndex = commandKeys.indexOf(commandKey);
      const commandInstance = commandList[commandKey];
      const commandExists = commandIndex !== -1;

      if (commandExists) {
        return {
          instance: commandInstance,
          type: commandType,
        }
      }
    }

    return undefined;
  }

}
