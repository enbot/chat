import { BotCommandList } from 'src/app/shared/interfaces/bot-command-list';
import { BotStateNormal } from 'src/app/shared/models/bot-states/bot-normal';
import { BotStateAngry } from 'src/app/shared/models/bot-states/bot-angry';
import { BotStateSad } from 'src/app/shared/models/bot-states/bot-sad';

export function botCommandFactory(): BotCommandList {
    return {
        CHANGE_STATE_NORMAL: new BotStateNormal(),
        CHANGE_STATE_ANGRY: new BotStateAngry(),
        CHANGE_STATE_HAPPY: new BotStateAngry(),
        CHANGE_STATE_STAR: new BotStateAngry(),
        CHANGE_STATE_SAD: new BotStateSad(),
        CHANGE_STATE_CLOSED: new BotStateAngry(),
        CHANGE_STATE_BORED: new BotStateAngry(),
        CHANGE_STATE_CAREFUL: new BotStateAngry(),
    };
}
