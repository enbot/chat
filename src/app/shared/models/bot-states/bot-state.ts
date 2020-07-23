import { BotCommandHead, BotCommandEyebrow, BotCommandEye, BotCommandIris, BotCommandLid, BotCommandBody } from 'src/app/shared/interfaces/bot-parts';
import { TypeStyle } from 'src/app/shared/interfaces/metric-types';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';
import { Size } from 'src/app/shared/providers/configs/size';
import { BotActive } from './bot-active';

export class BotState extends BotActive implements BotCommand {

    constructor(
        public readonly body: BotCommandBody,
        public readonly head: BotCommandHead,
        public readonly eyebrow: BotCommandEyebrow,
        public readonly eye: BotCommandEye,
        public readonly iris: BotCommandIris,
        public readonly lid: BotCommandLid,
    ) {
        super({
            eye: {
                width: eye.width,
                height: eye.height,
            },
            iris: {
                width: iris.width,
                height: iris.height,
            },
        });
    }

    public bodyStyles(): TypeStyle {
        return {
            fill: this.body.color,
        };
    }

    public helmetStyles(): TypeStyle {
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

}
