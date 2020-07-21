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
    color: Color.WHITE,
    width: 100,
    height: 70,
    radius: 100,
};

export const iris = {
    color: Color.BLACK,
    clip: Clip.NONE,
    width: 60,
    height: 90,
    radius: 15,
};

export const lid = {
    left: {
        top: {
            rotate: 0,
            closed: 1,
        },
        bot: {
            rotate: 10,
            closed: 6,
        },
    },
    right: {
        top: {
            rotate: 0,
            closed: 1,
        },
        bot: {
            rotate: -10,
            closed: 6,
        },
    },
};
