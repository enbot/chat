import { BotCommandList } from './bot-command-list';
import { ChatCommandList } from './chat-command-list';
import { WallpaperCommandList } from './wallpaper-command-list';

export interface AllCommandsList {
    bot: BotCommandList;
    chat: ChatCommandList;
    wallpaper: WallpaperCommandList;
}
