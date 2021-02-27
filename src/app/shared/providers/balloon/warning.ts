import * as parts from '../../interfaces/chat-parts';
import { Color } from '../configs/color';
import { Effect } from '../configs/effect';
import { Balloon } from '../configs/balloon';

export const content: parts.ChatContent = {
    color: Color.SNOW,
    effect: Effect.NONE,
};

export const shape: parts.ChatShape = {
    background: Color.LIGHTYELLOW,
    shape: Balloon.SPIKED,
    effect: Effect.NONE,
};
