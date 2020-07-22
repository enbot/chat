import { BotActives, BotActivesLoadData, BotActivesIrisData } from 'src/app/shared/interfaces/bot-types';
import { applyMinMaxRule } from 'src/app/shared/functions/apply-min-max-rule';
import { TypeAxis } from 'src/app/shared/interfaces/metric-types';
import { Size } from 'src/app/shared/providers/configs/size';

export class BotActive implements BotActives {

    private irisData: BotActivesIrisData;

    // private bodyData

    constructor(data: BotActivesLoadData) {
        const irisBaseSize = {
            x: (((data.eye.width * Size.PERCENT_MULTIPLY) * Size.EYE_WIDTH) * Size.EYE_INNER) - Size.EYE_GAP,
            y: (((data.eye.height * Size.PERCENT_MULTIPLY) * Size.EYE_HEIGHT) * Size.EYE_INNER) - Size.EYE_GAP,
        };
        const irisMaxSize = {
            x: irisBaseSize.x - data.iris.width,
            y: irisBaseSize.y - data.iris.height,
        };
        const irisMinSize = {
            x: Size.EYE_GAP,
            y: Size.EYE_GAP,
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
