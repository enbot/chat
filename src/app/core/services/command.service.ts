import { Injectable } from '@angular/core';
import { BotState } from 'src/app/shared/models/bot-states/bot-state';
import { ChatCommand } from 'src/app/shared/interfaces/chat-types';
import { WallpaperCommand } from 'src/app/shared/interfaces/wallpaper-types';
import { CommandResolver } from 'src/app/shared/models/general-config/command-resolver';
import { AllCommandsKey } from 'src/app/shared/interfaces/command-types';
import { Subject } from 'rxjs';
import { WallpaperState } from 'src/app/shared/models/wallpaper-states/wallpaper-state';

@Injectable({
  providedIn: 'root'
})
export class CommandService {

  public readonly botState: Subject<BotState>;
  public readonly wallpaperState: Subject<WallpaperState>;
  public readonly chatState: Subject<ChatCommand>;

  //   <!-- bot commands -->
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
    this.botState = new Subject();
    this.wallpaperState = new Subject();
    this.chatState = new Subject();
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
