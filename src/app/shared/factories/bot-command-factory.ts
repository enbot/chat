import { BotCommandList } from 'src/app/shared/interfaces/bot-types';
import { BotStateNormal } from 'src/app/shared/models/bot/bot-normal';
import { BotStateCareful } from 'src/app/shared/models/bot/bot-careful';
import { BotStateSurprise } from 'src/app/shared/models/bot/bot-surprise';
import { BotStateAnger } from 'src/app/shared/models/bot/bot-anger';
import { BotStateJoy } from 'src/app/shared/models/bot/bot-joy';
import { BotStateBored } from 'src/app/shared/models/bot/bot-bored';
import { BotStateSadness } from 'src/app/shared/models/bot/bot-sadness';

export function makeBotCommands(): BotCommandList {
    return {
        CHANGE_EMOTION_NORMAL: new BotStateNormal(),
        CHANGE_EMOTION_ANGER: new BotStateAnger(),
        CHANGE_EMOTION_JOY: new BotStateJoy(),
        CHANGE_EMOTION_SADNESS: new BotStateSadness(),
        CHANGE_EMOTION_SURPRISE: new BotStateSurprise(),
        CHANGE_EMOTION_BORED: new BotStateBored(),
        CHANGE_EMOTION_CAREFUL: new BotStateCareful(),
    };
}
