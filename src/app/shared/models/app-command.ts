import { botCommandFactory } from '../factories/bot-command-factory';
import { TypeCommand } from '../interfaces/type-command';
import { BotCommand } from '../interfaces/bot-command';

export class AppCommand {

    public readonly botCommand: BotCommand;

    constructor(command: TypeCommand) {
        this.botCommand = botCommandFactory(command);
    }

    // public readonly chatCommand: ChatCommand;
    // public readonly wallpaperCommand: WallpaperCommand;

    // this.chatCommand = new ChatCommand();
    // this.wallpaperCommand = new WallpaperCommand();

}
