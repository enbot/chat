import * as parts from '../../interfaces/bot-parts';
import { Color } from '../configs/color';
import { Clip } from '../configs/clip';

export const body: parts.BotCommandBody = {
    color: Color.SNOW,
};

export const head: parts.BotCommandHead = {
    color: Color.BLACK,
    rotate: -5,
};

export const eyebrow: parts.BotCommandEyebrow = {
    color: Color.WHITE,
    height: 50,
    width: 200,
    radius: 4,
};

export const eye: parts.BotCommandEye = {
    color: Color.PINK,
    width: 100,
    height: 70,
    radius: 100,
};

export const iris: parts.BotCommandIris = {
    color: Color.BLACK,
    clip: Clip.NONE,
    width: 40,
    height: 60,
    radius: 50,
};

export const lid: parts.BotCommandLid = {
    left: {
        top: {
            rotate: 0,
            closed: 25,
        },
        bot: {
            rotate: 0,
            closed: 25,
        },
    },
    right: {
        top: {
            rotate: 0,
            closed: 5,
        },
        bot: {
            rotate: 0,
            closed: 5,
        },
    },
};
