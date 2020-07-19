import { botCommandFactory } from 'src/app/shared/factories/bot-command-factory';
import { chatCommandFactory } from 'src/app/shared/factories/chat-command-factory';
import { wallpaperCommandFactory } from 'src/app/shared/factories/wallpaper-command-factory';
import { BotCommandList } from 'src/app/shared/interfaces/bot-types';
import { ChatCommandList } from 'src/app/shared/interfaces/chat-types';
import { WallpaperCommandList } from 'src/app/shared/interfaces/wallpaper-types';

export class CommandContainer {
    public static readonly bot: BotCommandList = botCommandFactory();
    public static readonly chat: ChatCommandList = chatCommandFactory();
    public static readonly wallpaper: WallpaperCommandList = wallpaperCommandFactory();
}
