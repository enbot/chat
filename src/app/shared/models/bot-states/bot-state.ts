import * as parts from 'src/app/shared/interfaces/bot-parts';
import { BotActive, BotActiveIrisData, BotActiveContainerData } from 'src/app/shared/interfaces/bot-active';
import { calculateBaseContainerData } from '../../functions/calculate-base-container-data';
import { calculateBaseIrisData } from '../../functions/calculate-base-iris-data';
import { calculateContainerData } from '../../functions/calculate-container-data';
import { calculateIrisData } from '../../functions/calculate-iris-data';
import { TypeStyle, TypeAxis } from 'src/app/shared/interfaces/metric-types';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';
import { Size } from 'src/app/shared/providers/configs/size';

export class BotState implements BotCommand, BotActive {

    private irisData: BotActiveIrisData;

    private containerData: BotActiveContainerData;

    constructor(
        public readonly body: parts.BotCommandBody,
        public readonly head: parts.BotCommandHead,
        public readonly eyebrow: parts.BotCommandEyebrow,
        public readonly eye: parts.BotCommandEye,
        public readonly iris: parts.BotCommandIris,
        public readonly lid: parts.BotCommandLid,
    ) {
        this.irisData = calculateBaseIrisData(eye, iris);
        this.containerData = calculateBaseContainerData();
    }

    public containerStyles(): TypeStyle {
        return {
            transform: `rotateX(${this.containerRotation.x}deg) rotateY(${this.containerRotation.y}deg)`
        };
    }

    public bodyStyles(): TypeStyle {
        return {
            fill: this.body.color,
        };
    }

    public screenStyles(): TypeStyle {
        return {
            backgroundColor: this.head.color,
        };
    }

    public headStyles(): TypeStyle {
        return {
            transform: `rotate(${this.head.rotate}deg)`,
        };
    }

    public viewportStyles(): TypeStyle {
        return {
            width: `${Size.EYE_WIDTH}px`,
            height: `${Size.EYE_HEIGHT}px`,
        };
    }

    public eyeStyles(): TypeStyle {
        return {
            width: `${this.eye.width}%`,
            height: `${this.eye.height}%`,
            backgroundColor: this.head.color,
        };
    }

    public scleraStyles(): TypeStyle {
        return {
            borderRadius: `${this.eye.radius}%`,
            backgroundColor: this.eye.color
        };
    }

    public irisStyles(): TypeStyle {
        return {
            backgroundColor: this.iris.color,
            clipPath: this.iris.clip,
            width: `${this.iris.width}px`,
            height: `${this.iris.height}px`,
            borderRadius: `${this.iris.radius}%`,
            top: `${this.irisSize.y}px`,
            left: `${this.irisSize.x}px`,
        };
    }

    public lidLeftTopStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.left.top.rotate}deg)`,
            top: `-${100 - (this.lid.left.top.closed)}%`,
        };
    }

    public lidLeftBotStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.left.bot.rotate}deg)`,
            bottom: `-${100 - (this.lid.left.bot.closed)}%`,
        };
    }

    public lidRightTopStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.right.top.rotate}deg)`,
            top: `-${100 - (this.lid.right.top.closed)}%`,
        };
    }

    public lidRightBotStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.right.bot.rotate}deg)`,
            bottom: `-${100 - (this.lid.right.bot.closed)}%`,
        };
    }

    public inputMousePosition(config: TypeAxis): void {
        this.updateIrisData(config);
        this.updateContainerData(config);
    }

    public get irisSize(): TypeAxis {
        return this.irisData.pixelSize;
    }

    public get containerRotation(): TypeAxis {
        return this.containerData.degRotation;
    }

    private updateIrisData(config: TypeAxis): void {
        this.irisData.pixelSize = calculateIrisData(config, this.irisData);
    }

    private updateContainerData(config: TypeAxis): void {
        this.containerData.degRotation = calculateContainerData(config, this.containerData);
    }

}
