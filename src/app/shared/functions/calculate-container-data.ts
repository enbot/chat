import { TypeAxis } from '../interfaces/metric-types';
import { BotActiveContainerData } from '../interfaces/bot-active';
import { Percent } from '../providers/configs/percent';
import { applyMinMaxRule } from './apply-min-max-rule';

export function calculateContainerData(config: TypeAxis, containerData: BotActiveContainerData): TypeAxis {
    const containerBaseRotation = containerData.baseRotation;
    const containerMaxRotation = containerData.maxRotation;
    const containerMinRotation = containerData.minRotation;

    const screenPercentBase = {
        x: config.x * Percent.MULTIPLY,
        y: config.y * Percent.MULTIPLY,
    };

    const containerDegreeDouble = {
        x: (containerBaseRotation.x * 2),
        y: (containerBaseRotation.y * 2),
    };

    const containerDegreeRelative = {
        x: (containerDegreeDouble.x * screenPercentBase.x),
        y: (containerDegreeDouble.y * screenPercentBase.y),
    };

    const containerDegreeRotation = {
        x: (containerDegreeRelative.x - containerBaseRotation.x),
        y: (containerDegreeRelative.y - containerBaseRotation.y),
    };

    return {
        x: applyMinMaxRule(containerDegreeRotation.x, containerMaxRotation.x, containerMinRotation.x),
        y: applyMinMaxRule(containerDegreeRotation.y, containerMaxRotation.y, containerMinRotation.y),
    };
}
