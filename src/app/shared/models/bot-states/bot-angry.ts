import { BotCommand } from '../../interfaces/bot-command';

export class BotStateAngry implements BotCommand {

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
        animation: 'floating',
        rotate: 0,
    };

    public readonly eye = {
        width: 240,
        height: 240,
        radius: 50,
    };

    public readonly clip = {
        form: ''
    };

}
