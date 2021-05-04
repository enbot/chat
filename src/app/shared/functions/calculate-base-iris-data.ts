import { BotCommandEye, BotCommandIris } from '../interfaces/bot-parts';
import { BotActiveIrisData } from '../interfaces/bot-active';
import { Percent } from '../providers/configs/percent';
import { Size } from '../providers/configs/size';

export function calculateBaseIrisData(eye: BotCommandEye, iris: BotCommandIris): BotActiveIrisData {
    const irisBaseSize = {
        x: (((eye.width * Percent.MULTIPLY) * Size.EYE_WIDTH) * Size.EYE_INNER) - Size.EYE_GAP,
        y: (((eye.height * Percent.MULTIPLY) * Size.EYE_HEIGHT) * Size.EYE_INNER) - Size.EYE_GAP,
    };

    const irisMaxSize = {
        x: irisBaseSize.x - iris.width,
        y: irisBaseSize.y - iris.height,
    };

    const irisMinSize = {
        x: Size.EYE_GAP,
        y: Size.EYE_GAP,
    };

    return {
        baseSize: irisBaseSize,
        maxSize: irisMaxSize,
        minSize: irisMinSize,
        pixelSize: {
            x: irisMaxSize.x / 2,
            y: irisMaxSize.y / 2,
        },
    };
}
