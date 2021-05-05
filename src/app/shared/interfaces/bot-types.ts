import * as parts from './bot-parts';
import { TypeStyle } from './metric-types';

export interface BotCommand {
    body: parts.BotCommandBody;
    head: parts.BotCommandHead;
    eyebrow: parts.BotCommandEyebrow;
    eye: parts.BotCommandEye;
    iris: parts.BotCommandIris;
    lid: parts.BotCommandLid;
    getContainerStyles(): TypeStyle;
    getBodyStyles(): TypeStyle;
    getScreenStyles(): TypeStyle;
    getViewportStyles(): TypeStyle;
    getHeadStyles(): TypeStyle;
    getEyeStyles(): TypeStyle;
    getScleraStyles(): TypeStyle;
    getIrisStyles(): TypeStyle;
    getLidLeftTopStyles(): TypeStyle;
    getLidLeftBotStyles(): TypeStyle;
    getLidRightTopStyles(): TypeStyle;
    getLidRightBotStyles(): TypeStyle;
}

export interface BotCommandList {
    CHANGE_EMOTION_NORMAL: BotCommand;
    CHANGE_EMOTION_ANGER: BotCommand;
    CHANGE_EMOTION_JOY: BotCommand;
    CHANGE_EMOTION_SADNESS: BotCommand;
    CHANGE_EMOTION_SURPRISE: BotCommand;
    CHANGE_EMOTION_BORED: BotCommand;
    CHANGE_EMOTION_FEAR: BotCommand;
}

export type BotCommandKey = keyof BotCommandList;
