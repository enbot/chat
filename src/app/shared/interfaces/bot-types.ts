import { BotCommandHead, BotCommandEyebrow, BotCommandEye, BotCommandIris, BotCommandLid } from './bot-parts';
import { TypeAxis, TypePixels, TypeClass, TypeStyle } from './metric-types';

export interface BotActives {
    irisSize: TypeAxis;
    inputMousePosition(config: TypeAxis): void;
}

export interface BotActivesLoadData {
    eye: {
        width: TypePixels;
        height: TypePixels;
    };
    iris: {
        width: TypePixels;
        height: TypePixels;
    };
}

export interface BotActivesIrisData {
    baseSize: TypeAxis;
    maxSize: TypeAxis;
    minSize: TypeAxis;
    pixelSize: TypeAxis;
}

export interface BotCommand extends BotActives {
    head: BotCommandHead;
    eyebrow: BotCommandEyebrow;
    eye: BotCommandEye;
    iris: BotCommandIris;
    lid: BotCommandLid;
    viewportClasses(): TypeClass;
    headClasses(): TypeClass;
    scleraClasses(): TypeClass;
    eyeClasses(): TypeClass;
    irisClasses(): TypeClass;
    lidLeftTopClasses(): TypeClass;
    lidLeftBotClasses(): TypeClass;
    lidRightTopClasses(): TypeClass;
    lidRightBotClasses(): TypeClass;
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
