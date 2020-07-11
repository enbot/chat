import { TypeDegree, TypePercent, TypePixels, TypeClip, TypeClass, TypeHex } from './type-metrics';

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
    state: TypeClass;
}

export interface BotCommandIris {
    color: TypeHex;
    clip: TypeClass;
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
    width: TypePercent;
    height: TypePercent;
    vertical: TypePercent;
    horizontal: TypePercent;
}

export interface BotCommand {
    head: BotCommandHead;
    eyebrow: BotCommandEyebrow;
    eye: BotCommandEye;
    iris: BotCommandIris;
    lid: BotCommandLid;
}
