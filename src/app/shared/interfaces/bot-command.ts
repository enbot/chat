import { TypeDegree, TypePercent, TypePixels } from './type-metrics';

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

    clip: {
        form: string | null;
    };

}
