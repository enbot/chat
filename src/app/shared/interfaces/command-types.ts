import { BotCommand, BotCommandKey, BotCommandList } from './bot-types';
import { ChatCommand, ChatCommandKey, ChatCommandList } from './chat-types';
import { WallpaperCommand, WallpaperCommandKey, WallpaperCommandList } from './wallpaper-types';

export type AllCommandsKey = BotCommandKey | ChatCommandKey | WallpaperCommandKey;

export interface AllCommandsList {
    bot: BotCommandList;
    chat: ChatCommandList;
    wallpaper: WallpaperCommandList;
}

export type AllCommandsListKey = keyof AllCommandsList;

export type TypeCommand = BotCommand | ChatCommand | WallpaperCommand;

export interface TypeCommandResolved {
    valid: boolean;
    list?: AllCommandsListKey;
    key?: AllCommandsKey;
}
