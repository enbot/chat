import { BotCommandList } from '../interfaces/bot-command-list';
import { BotStateAngry } from '../models/bot-states/bot-angry';

export function botCommandFactory(): BotCommandList {
    return {
        CHANGE_STATE_NORMAL: new BotStateAngry(),
        CHANGE_STATE_ANGRY: new BotStateAngry(),
        CHANGE_STATE_HAPPY: new BotStateAngry(),
        CHANGE_STATE_STAR: new BotStateAngry(),
        CHANGE_TATE_SAD: new BotStateAngry(),
        CHANGE_STATE_CLOSED: new BotStateAngry(),
        CHANGE_STATE_BORED: new BotStateAngry(),
        CHANGE_STATE_CAREFUL: new BotStateAngry(),
    };
}
