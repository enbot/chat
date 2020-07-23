import * as parts from '../../interfaces/bot-parts';
import { Color } from '../configs/color';
import { Clip } from '../configs/clip';

export const body: parts.BotCommandBody = {
    color: Color.SNOW,
};

export const head: parts.BotCommandHead = {
    color: Color.BLACK,
    rotate: 0,
};

export const eyebrow: parts.BotCommandEyebrow = {
    color: Color.WHITE,
    height: 50,
    width: 200,
    radius: 4,
};

export const eye: parts.BotCommandEye = {
    color: Color.RED,
    width: 100,
    height: 70,
    radius: 100,
};

export const iris: parts.BotCommandIris = {
    color: Color.BLACK,
    clip: Clip.NONE,
    width: 50,
    height: 80,
    radius: 50,
};

export const lid: parts.BotCommandLid = {
    left: {
        top: {
            rotate: 15,
            closed: 30,
        },
        bot: {
            rotate: 15,
            closed: -2,
        },
    },
    right: {
        top: {
            rotate: -15,
            closed: 30,
        },
        bot: {
            rotate: -15,
            closed: -2,
        },
    },
};
