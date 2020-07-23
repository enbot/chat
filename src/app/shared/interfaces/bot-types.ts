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
    CHANGE_STATE_NORMAL: BotCommand;
    CHANGE_STATE_ANGRY: BotCommand;
    CHANGE_STATE_HAPPY: BotCommand;
    CHANGE_STATE_STAR: BotCommand;
    CHANGE_STATE_SAD: BotCommand;
    CHANGE_STATE_CONFUSED: BotCommand;
    CHANGE_STATE_BORED: BotCommand;
    CHANGE_STATE_CAREFUL: BotCommand;
}

export type BotCommandKey = keyof BotCommandList;
