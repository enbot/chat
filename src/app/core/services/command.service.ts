import { Injectable } from '@angular/core';
import { BotCommandList } from 'src/app/shared/interfaces/bot-types';
import { ChatCommandList } from 'src/app/shared/interfaces/chat-types';
import { WallpaperCommandList } from 'src/app/shared/interfaces/wallpaper-types';
import { makeBotCommands } from 'src/app/shared/factories/bot-command-factory';
import { makeChatCommands } from 'src/app/shared/factories/chat-command-factory';
import { makeWallpaperCommands } from 'src/app/shared/factories/wallpaper-command-factory';
import { AnyCommandKey, ResolvedCommand, AnyCommandListKey } from 'src/app/shared/interfaces/command-types';
import { WallpaperState } from 'src/app/shared/models/wallpaper/wallpaper-state';
import { BotState } from 'src/app/shared/models/bot/bot-state';
import { Subject } from 'rxjs';

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

  // public isCommand(command: string): boolean {
  //   // return CommandResolver.resolve(command as AnyCommandKey).valid;
  // }

  // public getCommandKey(aaaa, bbbb) {
  //   // TODO: change "AllCommandsX" to "AnyCommandX" or something like that
  // }

  public runCommand(commandKey: AnyCommandKey): void {
    const command = this.resolveInstance(commandKey);

    if (command) {
      const commandInstance = command.instance;
      const commandType = command.type;
      const subjectName = `on${commandType.replace(/\b[a-z]/g, (x) => x.toUpperCase())}Change`;
      const subjectEmitter = this[subjectName];
      subjectEmitter.next(commandInstance);
    }
  }

  public resolveCommand(type: AnyCommandListKey, matcher: string): AnyCommandKey | undefined {
    const commandList = this[`${type}CommandList`];
    const commandKeys = Object.keys(commandList);

    for (const key of commandKeys as AnyCommandKey[]) {
      const lowerKey = key.toLowerCase();
      const lowerMatcher = matcher.toLowerCase();

      if (lowerKey.includes(lowerMatcher)) {
        return key;
      }
    }

    return undefined;
  }

  public resolveInstance(commandKey: AnyCommandKey): ResolvedCommand | undefined {
    const botCommandList = this.botCommandList;
    const chatCommandList = this.chatCommandList;
    const wallpaperCommandList = this.wallpaperCommandList;

    const lists = [
      { type: 'bot', commands: botCommandList },
      { type: 'chat', commands: chatCommandList },
      { type: 'wallpaper', commands: wallpaperCommandList },
    ];

    for (const list of lists) {
      const commandList = list.commands;
      const commandType = list.type as AnyCommandListKey;
      const commandKeys = Object.keys(commandList);
      const commandIndex = commandKeys.indexOf(commandKey);
      const commandInstance = commandList[commandKey];
      const commandExists = commandIndex !== -1;

      if (commandExists) {
        return {
          instance: commandInstance,
          type: commandType,
        };
      }
    }

    return undefined;
  }

}
