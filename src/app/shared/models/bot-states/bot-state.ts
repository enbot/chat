import { BotCommand, BotCommandHead, BotCommandEyebrow, BotCommandEye, BotCommandIris, BotCommandLid } from '../../interfaces/bot-command';
import { TypeClass, TypeStyle } from '../../interfaces/type-metrics';

export class BotState implements BotCommand {

    constructor(
        public readonly head: BotCommandHead,
        public readonly eyebrow: BotCommandEyebrow,
        public readonly eye: BotCommandEye,
        public readonly iris: BotCommandIris,
        public readonly lid: BotCommandLid,
    ) { }

    public headClasses(): TypeClass {
        return `head ${this.head.animation}`;
    }

    public scleraClasses(): TypeClass {
        return `sclera ${this.eye.background}`;
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
            transform: `rotate(${this.head.rotate}deg)`
        };
    }

    public eyeStyles(): TypeStyle {
        return {
            width: `${this.eye.width}px`,
            height: `${this.eye.height}px`,
        };
    }

    public scleraStyles(): TypeStyle {
        return {
            borderRadius: `${this.eye.radius}%`,
        };
    }

    public irisStyles(): TypeStyle {
        return {
            backgroundColor: this.iris.color,
            clipPath: this.iris.clip,
            width: `${this.iris.width}px`,
            height: `${this.iris.height}px`,
            borderRadius: `${this.iris.radius}%`,
        };
    }

    public lidLeftTopStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.left.top.rotate}deg)`,
            top: `${this.lid.left.top.vertical}%`,
            left: `${this.lid.left.top.horizontal}%`,
            width: `${this.lid.left.top.width}%`,
            height: `${this.lid.left.top.height}%`,
        };
    }

    public lidLeftBotStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.left.bot.rotate}deg)`,
            top: `${this.lid.left.bot.vertical}%`,
            left: `${this.lid.left.bot.horizontal}%`,
            width: `${this.lid.left.bot.width}%`,
            height: `${this.lid.left.bot.height}%`,
        };
    }

    public lidRightTopStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.right.top.rotate}deg)`,
            top: `${this.lid.right.top.vertical}%`,
            right: `${this.lid.right.top.horizontal}%`,
            width: `${this.lid.right.top.width}%`,
            height: `${this.lid.right.top.height}%`,
        };
    }

    public lidRightBotStyles(): TypeStyle {
        return {
            transform: `rotate(${this.lid.right.bot.rotate}deg)`,
            top: `${this.lid.right.bot.vertical}%`,
            right: `${this.lid.right.bot.horizontal}%`,
            width: `${this.lid.right.bot.width}%`,
            height: `${this.lid.right.bot.height}%`,
        };
    }

}
