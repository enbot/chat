import { botCommandFactory } from '../factories/bot-command-factory';
import { chatCommandFactory } from '../factories/chat-command-factory';
import { wallpaperCommandFactory } from '../factories/wallpaper-command-factory';
import { BotCommandList } from '../interfaces/bot-command-list';
import { ChatCommandList } from '../interfaces/chat-command-list';
import { WallpaperCommandList } from '../interfaces/wallpaper-command-list';

export class CommandContainer {
    public static readonly bot: BotCommandList = botCommandFactory();
    public static readonly chat: ChatCommandList = chatCommandFactory();
    public static readonly wallpaper: WallpaperCommandList = wallpaperCommandFactory();
}
