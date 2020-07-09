import { BotStateAngry } from '../models/bot-state-angry';
import { BotStateNormal } from '../models/bot-state-normal';
import { BotCommandList } from '../interfaces/bot-command-list';

export function botCommandFactory(): BotCommandList {
    return {
        CHANGE_STATE_NORMAL: new BotStateNormal(),
        CHANGE_STATE_ANGRY: new BotStateAngry(),
        CHANGE_STATE_HAPPY: new BotStateNormal(),
        CHANGE_STATE_STAR: new BotStateNormal(),
        CHANGE_TATE_SAD: new BotStateNormal(),
        CHANGE_STATE_CLOSED: new BotStateNormal(),
        CHANGE_STATE_BORED: new BotStateNormal(),
        CHANGE_STATE_CAREFUL: new BotStateNormal(),
    };
}
