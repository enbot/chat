import { BotCommandList } from 'src/app/shared/interfaces/bot-types';
import { BotStateNormal } from 'src/app/shared/models/bot-states/bot-normal';
import { BotStateCareful } from 'src/app/shared/models/bot-states/bot-careful';
import { BotStateConfused } from 'src/app/shared/models/bot-states/bot-confused';
import { BotStateAngry } from 'src/app/shared/models/bot-states/bot-angry';
import { BotStateHappy } from 'src/app/shared/models/bot-states/bot-happy';
import { BotStateBored } from 'src/app/shared/models/bot-states/bot-bored';
import { BotStateSad } from 'src/app/shared/models/bot-states/bot-sad';

export function makeBotCommands(): BotCommandList {
    return {
        CHANGE_EMOTION_NORMAL: new BotStateNormal(),
        CHANGE_EMOTION_ANGRY: new BotStateAngry(),
        CHANGE_EMOTION_HAPPY: new BotStateHappy(),
        CHANGE_EMOTION_SAD: new BotStateSad(),
        CHANGE_EMOTION_CONFUSED: new BotStateConfused(),
        CHANGE_EMOTION_BORED: new BotStateBored(),
        CHANGE_EMOTION_CAREFUL: new BotStateCareful(),
    };
}
