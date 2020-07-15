import { TypeDegree, TypePercent, TypePixels, TypeStyle, TypeClass, TypeHex, TypeAxis } from './type-metrics';
import { Type } from '@angular/core';
import { PercentConfig } from './percent-config';

export interface BotCommandHead {
    color: TypeHex;
    animation: TypeClass;
    rotate: TypeDegree;
}

export interface BotCommandEyebrow {
    color: TypeHex;
    width: TypePixels;
    height: TypePixels;
    radius: TypePercent;
}

export interface BotCommandEye {
    width: TypePixels;
    height: TypePixels;
    radius: TypePercent;
    background: TypeClass;
}

export interface BotCommandIris {
    color: TypeHex;
    clip: TypeClass;
    width: TypePixels;
    height: TypePixels;
    radius: TypePercent;
}

export interface BotCommandLid {
    left: BotCommandLidSide;
    right: BotCommandLidSide;
}

export interface BotCommandLidSide {
    top: BotCommandLidConfig;
    bot: BotCommandLidConfig;
}

export interface BotCommandLidConfig {
    rotate: TypeDegree;
    closed: TypePercent;
}

export interface BotCommand extends BotActives {
    head: BotCommandHead;
    eyebrow: BotCommandEyebrow;
    eye: BotCommandEye;
    iris: BotCommandIris;
    lid: BotCommandLid;
    headClasses(): TypeClass;
    scleraClasses(): TypeClass;
    eyeClasses(): TypeClass;
    irisClasses(): TypeClass;
    lidLeftTopClasses(): TypeClass;
    lidLeftBotClasses(): TypeClass;
    lidRightTopClasses(): TypeClass;
    lidRightBotClasses(): TypeClass;
    headStyles(): TypeStyle;
    eyeStyles(): TypeStyle;
    scleraStyles(): TypeStyle;
    irisStyles(): TypeStyle;
    lidLeftTopStyles(): TypeStyle;
    lidLeftBotStyles(): TypeStyle;
    lidRightTopStyles(): TypeStyle;
    lidRightBotStyles(): TypeStyle;
}

export interface BotActives {
    irisSize: TypeAxis;
    inputMousePosition(config: PercentConfig): void;
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
