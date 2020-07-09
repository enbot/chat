import { TypeDegree, TypePercent, TypePixels, className } from './type-metrics';

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
        animation: className | null;
        rotate: TypeDegree | null;
    };

    clip: {
        form: string | null;
    };

}
