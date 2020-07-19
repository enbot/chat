import { BotActives, BotActivesLoadData, BotActivesIrisData } from 'src/app/shared/interfaces/bot-types';
import { applyMinMaxRule } from '../../functions/apply-min-max-rule';
import { TypeAxis } from 'src/app/shared/interfaces/metric-types';

export class BotActive implements BotActives {

    private irisData: BotActivesIrisData;

    constructor(data: BotActivesLoadData) {
        const irisBaseSize = {
            x: (data.eye.width * 0.85) - 10,
            y: (data.eye.height * 0.85) - 10,
        };
        const irisMaxSize = {
            x: irisBaseSize.x - data.iris.width,
            y: irisBaseSize.y - data.iris.height,
        };
        const irisMinSize = {
            x: 10,
            y: 10
        };
        this.irisData = {
            baseSize: irisBaseSize,
            maxSize: irisMaxSize,
            minSize: irisMinSize,
            pixelSize: {
                x: irisMaxSize.x / 2,
                y: irisMaxSize.y / 2,
            },
        };
    }

    public inputMousePosition(config: TypeAxis): void {
        this.updateIrisData(config);
    }

    public get irisSize(): TypeAxis {
        return this.irisData.pixelSize;
    }

    private updateIrisData(config: TypeAxis): void {
        const irisBaseSize = this.irisData.baseSize;
        const irisMaxSize = this.irisData.maxSize;
        const irisMinSize = this.irisData.minSize;
        const screenPercentBase = {
            x: config.x * 0.01,
            y: config.y * 0.01,
        };
        const irisPixelSize = {
            x: irisBaseSize.x * screenPercentBase.x,
            y: irisBaseSize.y * screenPercentBase.y,
        };
        this.irisData.pixelSize = {
            x: applyMinMaxRule(irisPixelSize.x, irisMaxSize.x, irisMinSize.x),
            y: applyMinMaxRule(irisPixelSize.y, irisMaxSize.y, irisMinSize.y),
        };
    }

}
