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

    public readonly clip = {
        form: null
    };

}
