import { TypeDegree, TypePercent, TypePixels, TypeClip, TypeClass } from './type-metrics';

export interface BotCommandWrapper {
    rotate: TypeDegree;
    width: TypePercent;
    height: TypePercent;
    vertical: TypePercent;
    horizontal: TypePercent;
}

export interface BotCommand {

    wrapper: {
        top: BotCommandWrapper;
        bot: BotCommandWrapper;
    };

    eye: {
        width: TypePixels;
        height: TypePixels;
        radius: TypePercent;
    };

    head: {
        animation: TypeClass;
        rotate: TypeDegree;
    };

    clip: {
        form: TypeClip;
    };

}
