import { TypeDegree, TypePercent, TypeHex, TypeClass, TypePixels } from './metric-types';

export interface BotCommandBody {
    color: TypeHex;
}

export interface BotCommandHead {
    color: TypeHex;
    rotate: TypeDegree;
}

export interface BotCommandEyebrow {
    color: TypeHex;
    width: TypePixels;
    height: TypePixels;
    radius: TypePercent;
}

export interface BotCommandEye {
    color: TypeClass;
    width: TypePercent;
    height: TypePercent;
    radius: TypePercent;
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
