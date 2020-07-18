import { BotCommandKey } from './bot-command-key';
import { ChatCommandKey } from './chat-command-key';
import { WallpaperCommandKey } from './wallpaper-command-key';

export type AllCommandsKey = BotCommandKey | ChatCommandKey | WallpaperCommandKey;

import { BotCommandList } from './bot-command-list';
import { ChatCommandList } from './chat-command-list';
import { WallpaperCommandList } from './wallpaper-command-list';

export interface AllCommandsList {
    bot: BotCommandList;
    chat: ChatCommandList;
    wallpaper: WallpaperCommandList;
}

import { AllCommandsList } from './all-commands-list';

export type AllCommandsListKey = keyof AllCommandsList;

import { BotCommand } from './bot-command';
import { ChatCommand } from './chat-command';
import { WallpaperCommand } from './wallpaper-command';

export type TypeCommand = BotCommand | ChatCommand | WallpaperCommand;

import { AllCommandsListKey } from './all-commands-list-key';
import { AllCommandsKey } from './all-commands-key';

export interface TypeCommandResolved {
    valid: boolean;
    list?: AllCommandsListKey;
    key?: AllCommandsKey;
}
