import { BotCommandList } from '../interfaces/bot-command-list';
import * as cs from '../models/command-states';

export function botCommandFactory(): BotCommandList {
    return {
        CHANGE_STATE_NORMAL: new cs.BotStateAngry(),
        CHANGE_STATE_ANGRY: new cs.BotStateAngry(),
        CHANGE_STATE_HAPPY: new cs.BotStateAngry(),
        CHANGE_STATE_STAR: new cs.BotStateAngry(),
        CHANGE_TATE_SAD: new cs.BotStateAngry(),
        CHANGE_STATE_CLOSED: new cs.BotStateAngry(),
        CHANGE_STATE_BORED: new cs.BotStateAngry(),
        CHANGE_STATE_CAREFUL: new cs.BotStateAngry(),
    };
}
