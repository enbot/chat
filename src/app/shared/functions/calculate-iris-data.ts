import { TypeAxis } from '../interfaces/metric-types';
import { BotActiveIrisData } from '../interfaces/bot-active';
import { applyMinMaxRule } from './apply-min-max-rule';

export function calculateIrisData(config: TypeAxis, irisData: BotActiveIrisData): TypeAxis {

    const irisBaseSize = irisData.baseSize;
    const irisMaxSize = irisData.maxSize;
    const irisMinSize = irisData.minSize;

    const screenPercentBase = {
        x: config.x * 0.01,
        y: config.y * 0.01,
    };

    const irisPixelSize = {
        x: irisBaseSize.x * screenPercentBase.x,
        y: irisBaseSize.y * screenPercentBase.y,
    };

    return {
        x: applyMinMaxRule(irisPixelSize.x, irisMaxSize.x, irisMinSize.x),
        y: applyMinMaxRule(irisPixelSize.y, irisMaxSize.y, irisMinSize.y),
    };

}
