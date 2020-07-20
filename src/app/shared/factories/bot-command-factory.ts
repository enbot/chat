import { BotCommandList } from 'src/app/shared/interfaces/bot-types';
import { BotStateNormal } from 'src/app/shared/models/bot-states/bot-normal';
import { BotStateCareful } from 'src/app/shared/models/bot-states/bot-careful';
import { BotStateAngry } from 'src/app/shared/models/bot-states/bot-angry';
import { BotStateHappy } from 'src/app/shared/models/bot-states/bot-happy';
import { BotStateSad } from 'src/app/shared/models/bot-states/bot-sad';

export function botCommandFactory(): BotCommandList {
    return {
        CHANGE_STATE_NORMAL: new BotStateNormal(),
        CHANGE_STATE_ANGRY: new BotStateAngry(),
        CHANGE_STATE_HAPPY: new BotStateHappy(),
        CHANGE_STATE_STAR: new BotStateAngry(),
        CHANGE_STATE_SAD: new BotStateSad(),
        CHANGE_STATE_CLOSED: new BotStateAngry(),
        CHANGE_STATE_BORED: new BotStateAngry(),
        CHANGE_STATE_CAREFUL: new BotStateCareful(),
    };
}
