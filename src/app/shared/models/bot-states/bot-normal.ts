import { BotCommand } from '../../interfaces/bot-command';

export class BotStateNormal implements BotCommand {

    public readonly wrapper = {
        top: {
            rotate: 0,
            width: 100,
            height: 100,
            vertical: 100,
            horizontal: 0,
        },
        bot: {
            rotate: 0,
            width: 100,
            height: 100,
            vertical: 100,
            horizontal: 0,
        }
    };

    public readonly head = {
        animation: null,
        rotate: null,
    };

    public readonly eye = {
        width: 240,
        height: 240,
        radius: 50,
    };

    public readonly clip = {
        form: null
    };

}
