import { BotState } from './bot-state';

export class BotStateAngry extends BotState {

    constructor() {
        const head = {
            color: '#000000',
            animation: 'floating',
            rotate: 0,
        };

        const eyebrow = {
            color: '#ffffff',
            height: 50,
            width: 200,
            radius: 4,
        };

        const eye = {
            width: 200,
            height: 300,
            radius: 100,
            background: 'fire',
        };

        const iris = {
            color: '#000000',
            clip: 'none',
            width: 50,
            height: 80,
            radius: 50,
        };

        const lid = {
            left: {
                top: {
                    rotate: 110,
                    width: 100,
                    height: 100,
                    vertical: -45,
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
                    rotate: 70,
                    width: 100,
                    height: 100,
                    vertical: -45,
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
        };

        super(head, eyebrow, eye, iris, lid);

    }

}
