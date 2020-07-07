import { TypeCommand } from '../interfaces/type-command';
import { BotCommand } from '../interfaces/bot-command';
import { BotStateNormal } from '../commands';
import { BotStateAngry } from '../commands';

export function botCommandFactory(command: TypeCommand): BotCommand {
    const availableCommands = {
        CHANGE_STATE_NORMAL: new BotStateNormal(),
        CHANGE_STATE_ANGRY: new BotStateAngry(),
        // 'CHANGE_STATE_HAPPY':
        // 'CHANGE_STATE_STAR':
        // 'CHANGE_STATE_SAD':
        // 'CHANGE_STATE_CLOSED':
        // 'CHANGE_STATE_BORED':
        // 'CHANGE_STATE_CAREFUL':
    };
    const selectedCommand = availableCommands[command];
    return selectedCommand;
}
