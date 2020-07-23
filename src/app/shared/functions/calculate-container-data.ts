import { TypeAxis } from '../interfaces/metric-types';
import { BotActiveContainerData } from '../interfaces/bot-active';

export function calculateContainerData(config: TypeAxis, containerData: BotActiveContainerData): TypeAxis {

    console.log(config);

    return {
        x: 0,
        y: 0,
    };

}
