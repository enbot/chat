import { BotCommandHead, BotCommandEyebrow, BotCommandEye, BotCommandIris, BotCommandLid } from 'src/app/shared/interfaces/bot-parts';
import { TypeClass, TypeStyle } from 'src/app/shared/interfaces/metric-types';
import { BotCommand } from 'src/app/shared/interfaces/bot-types';
import { Size } from 'src/app/shared/providers/configs/size';
import { BotActive } from './bot-active';

export class BotState extends BotActive implements BotCommand {

    constructor(
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

    public headClasses(): TypeClass {
        return `head ${this.head.animation}`;
    }

    public scleraClasses(): TypeClass {
        return `sclera`;
    }

    public viewportClasses(): TypeClass {
        return `viewport`;
    }

    public eyeClasses(): TypeClass {
        return 'eye';
    }

    public irisClasses(): TypeClass {
        return 'iris';
    }

    public lidLeftTopClasses(): TypeClass {
        return 'lid top';
    }

    public lidLeftBotClasses(): TypeClass {
        return 'lid bot';
    }

    public lidRightTopClasses(): TypeClass {
        return 'lid top';
    }

    public lidRightBotClasses(): TypeClass {
        return 'lid bot';
    }

    public headStyles(): TypeStyle {
        return {
            transform: `rotate(${this.head.rotate}deg)`,
            backgroundColor: this.head.color,
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
