import { BotCommand, BotCommandKey, BotCommandList } from './bot-types';
import { ChatCommand, ChatCommandKey, ChatCommandList } from './chat-types';
import { WallpaperCommand, WallpaperCommandKey, WallpaperCommandList } from './wallpaper-types';

export type AnyCommandKey = BotCommandKey | ChatCommandKey | WallpaperCommandKey;

export interface AnyCommandList {
    bot: BotCommandList;
    chat: ChatCommandList;
    wallpaper: WallpaperCommandList;
}

export type AnyCommandListKey = keyof AnyCommandList;

export type AnyCommand = BotCommand | ChatCommand | WallpaperCommand;

export interface ResolvedCommand {
    instance: AnyCommand;
    type: AnyCommandListKey;
}
