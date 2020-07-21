import { Animation } from '../configs/animation';
import { Color } from '../configs/color';
import { Clip } from '../configs/clip';

export const head = {
    color: Color.BLACK,
    animation: Animation.FLOATING,
    rotate: 0,
};

export const eyebrow = {
    color: Color.WHITE,
    height: 50,
    width: 200,
    radius: 4,
};

export const eye = {
    color: Color.RED,
    width: 100,
    height: 70,
    radius: 100,
};

export const iris = {
    color: Color.BLACK,
    clip: Clip.NONE,
    width: 60,
    height: 90,
    radius: 50,
};

export const lid = {
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
