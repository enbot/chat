import { TypeDegree, TypePercent, TypeClass, TypePixels } from './metric-types';
import { Color } from '../providers/configs/color';
import { Clip } from '../providers/configs/clip';

export interface BotCommandBody {
    color: Color;
}

export interface BotCommandHead {
    color: Color;
    rotate: TypeDegree;
}

export interface BotCommandEyebrow {
    color: Color;
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
    color: Color;
    clip: Clip;
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
