import { TypeAxis } from '../interfaces/metric-types';
import { BotActiveIrisData } from '../interfaces/bot-active';
import { applyMinMaxRule } from './apply-min-max-rule';
import { Percent } from '../providers/configs/percent';

export function calculateIrisData(config: TypeAxis, irisData: BotActiveIrisData): TypeAxis {

    const irisBaseSize = irisData.baseSize;
    const irisMaxSize = irisData.maxSize;
    const irisMinSize = irisData.minSize;

    const screenPercentBase = {
        x: config.x * Percent.MULTIPLY,
        y: config.y * Percent.MULTIPLY,
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
