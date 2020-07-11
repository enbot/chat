import { TypeDegree, TypePercent, TypePixels, TypeClip, TypeClass, TypeHex } from './type-metrics';

export interface BotCommand {

    head: {
        color: TypeHex;
        animation: TypeClass;
        rotate: TypeDegree;
    };

    eyebrow: {
        color: TypeHex;
        width: TypePixels;
        height: TypePixels;
        radius: TypePercent;
    };

    eye: {
        width: TypePixels;
        height: TypePixels;
        radius: TypePercent;
        state: TypeClass;
    };

    iris: {
        color: TypeHex;
        form: TypeClip;
    };

    lid: {
        top: {
            rotate: TypeDegree;
            width: TypePercent;
            height: TypePercent;
            vertical: TypePercent;
            horizontal: TypePercent;
        };
        bot: {
            rotate: TypeDegree;
            width: TypePercent;
            height: TypePercent;
            vertical: TypePercent;
            horizontal: TypePercent;
        };
    };

}
