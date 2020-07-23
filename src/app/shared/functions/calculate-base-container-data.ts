import { BotActiveContainerData } from '../interfaces/bot-active';
import { Rotation } from '../providers/configs/rotation';

export function calculateBaseContainerData(): BotActiveContainerData {

    const containerBaseRotation = {
        x: Rotation.CONTAINER_X,
        y: Rotation.CONTAINER_Y,
    };

    const containerMaxRotation = {
        x: containerBaseRotation.x,
        y: containerBaseRotation.y,
    };

    const containerMinRotation = {
        x: containerBaseRotation.x * -1,
        y: containerBaseRotation.y * -1,
    };

    return {
        baseRotation: containerBaseRotation,
        maxRotation: containerMaxRotation,
        minRotation: containerMinRotation,
        degRotation: {
            x: 0,
            y: 0,
        },
    };

}
