import { BotCommand, BotCommandHead, BotCommandEyebrow, BotCommandEye, BotCommandIris, BotCommandLid } from '../../interfaces/bot-command';

export class BotStateAngry implements BotCommand {

    public readonly head: BotCommandHead;
    public readonly eyebrow: BotCommandEyebrow;
    public readonly eye: BotCommandEye;
    public readonly iris: BotCommandIris;
    public readonly lid: BotCommandLid;

    constructor() {
        this.head = {
            color: '#000000',
            animation: 'floating',
            rotate: 0,
        };

        this.eyebrow = {
            color: '#ffffff',
            height: 50,
            width: 200,
            radius: 4,
        };

        this.eye = {
            width: 200,
            height: 300,
            radius: 100,
            background: 'fire',
        };

        this.iris = {
            color: '#000000',
            clip: 'none',
        };

        this.lid = {
            left: {
                top: {
                    rotate: 110,
                    width: 100,
                    height: 100,
                    vertical: -60,
                    horizontal: 25,
                },
                bot: {
                    rotate: 0,
                    width: 100,
                    height: 100,
                    vertical: -100,
                    horizontal: 0,
                },
            },
            right: {
                top: {
                    rotate: 0,
                    width: 0,
                    height: 0,
                    vertical: 0,
                    horizontal: 0,
                },
                bot: {
                    rotate: 0,
                    width: 0,
                    height: 0,
                    vertical: 0,
                    horizontal: 0,
                },
            },
        };
    }

}
