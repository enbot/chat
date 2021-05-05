import { BotCommandList } from 'src/app/shared/interfaces/bot-types';
import { BotStateNormal } from 'src/app/shared/models/bot/bot-normal';
import { BotStateCareful } from 'src/app/shared/models/bot/bot-careful';
import { BotStateConfused } from 'src/app/shared/models/bot/bot-confused';
import { BotStateAnger } from 'src/app/shared/models/bot/bot-anger';
import { BotStateHappy } from 'src/app/shared/models/bot/bot-happy';
import { BotStateBored } from 'src/app/shared/models/bot/bot-bored';
import { BotStateSad } from 'src/app/shared/models/bot/bot-sad';

export function makeBotCommands(): BotCommandList {
    return {
        CHANGE_EMOTION_NORMAL: new BotStateNormal(),
        CHANGE_EMOTION_ANGER: new BotStateAnger(),
        CHANGE_EMOTION_HAPPY: new BotStateHappy(),
        CHANGE_EMOTION_SAD: new BotStateSad(),
        CHANGE_EMOTION_CONFUSED: new BotStateConfused(),
        CHANGE_EMOTION_BORED: new BotStateBored(),
        CHANGE_EMOTION_CAREFUL: new BotStateCareful(),
    };
}
