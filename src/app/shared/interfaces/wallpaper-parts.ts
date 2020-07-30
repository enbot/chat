import { TypeMilliseconds } from '../interfaces/metric-types';
import { Transition } from '../providers/configs/transition';
import { Effect } from '../providers/configs/effect';
import { Color } from '../providers/configs/color';

export interface WallpaperImage {
    name: string;
    path: string;
    effect: Effect;
}

export interface WallpaperComponent {
    name: string;
    color: Color;
    metadata: {
        url: string | null;
    };
}

export interface WallpaperTransition {
    name: Transition;
    delay: TypeMilliseconds;
    offset: TypeMilliseconds;
}
