import { TypeDegree, TypePercent } from './type-metrics';

export type BotCommandClipForm = 'star' | null;

export interface BotCommandWrapper {
    top: BotCommandWrapperSide;
    bot: BotCommandWrapperSide;
}

export interface BotCommandWrapperSide {
    rotate: TypeDegree;
    width: TypePercent;
    height: TypePercent;
    vertical: TypePercent;
    horizontal: TypePercent;
}

export interface BotCommandClip {
    form: BotCommandClipForm;
}

export interface BotCommand {
    wrapper: BotCommandWrapper;
    clip: BotCommandClip;
}
