import { TypeAxis } from './metric-types';

export interface BotActive {
    irisSize: TypeAxis;
    containerRotation: TypeAxis;
    inputMousePosition(config: TypeAxis): void;
}

export interface BotActiveIrisData {
    baseSize: TypeAxis;
    maxSize: TypeAxis;
    minSize: TypeAxis;
    pixelSize: TypeAxis;
}

export interface BotActiveContainerData {
    baseRotation: TypeAxis;
    maxRotation: TypeAxis;
    minRotation: TypeAxis;
    degRotation: TypeAxis;
}
