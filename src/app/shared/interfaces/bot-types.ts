import * as parts from './bot-parts';
import { TypeStyle } from './metric-types';

export interface BotCommand {
    body: parts.BotCommandBody;
    head: parts.BotCommandHead;
    eyebrow: parts.BotCommandEyebrow;
    eye: parts.BotCommandEye;
    iris: parts.BotCommandIris;
    lid: parts.BotCommandLid;
    containerStyles(): TypeStyle;
    bodyStyles(): TypeStyle;
    screenStyles(): TypeStyle;
    viewportStyles(): TypeStyle;
    headStyles(): TypeStyle;
    eyeStyles(): TypeStyle;
    scleraStyles(): TypeStyle;
    irisStyles(): TypeStyle;
    lidLeftTopStyles(): TypeStyle;
    lidLeftBotStyles(): TypeStyle;
    lidRightTopStyles(): TypeStyle;
    lidRightBotStyles(): TypeStyle;
}

export interface BotCommandList {
    CHANGE_EMOTION_NORMAL: BotCommand;
    CHANGE_EMOTION_ANGRY: BotCommand;
    CHANGE_EMOTION_HAPPY: BotCommand;
    CHANGE_EMOTION_STAR: BotCommand;
    CHANGE_EMOTION_SAD: BotCommand;
    CHANGE_EMOTION_CONFUSED: BotCommand;
    CHANGE_EMOTION_BORED: BotCommand;
    CHANGE_EMOTION_CAREFUL: BotCommand;
}

export type BotCommandKey = keyof BotCommandList;
