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
    color: Color.YELLOW,
    width: 200,
    height: 250,
    radius: 100,
};

export const iris = {
    color: Color.BLACK,
    clip: Clip.NONE,
    width: 65,
    height: 95,
    radius: 40,
};

export const lid = {
    left: {
        top: {
            rotate: 0,
            closed: -10,
        },
        bot: {
            rotate: 20,
            closed: 20,
        },
    },
    right: {
        top: {
            rotate: 0,
            closed: -10,
        },
        bot: {
            rotate: -20,
            closed: 20,
        },
    },
};
