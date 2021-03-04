import { TypeMilliseconds } from '../interfaces/metric-types';
import { Transition } from '../providers/configs/transition';
import { Wallpaper } from '../providers/configs/wallpaper';
import { Effect } from '../providers/configs/effect';
import { Color } from '../providers/configs/color';

export interface WallpaperMetadata {
    url?: string;
    path?: string;
    effect?: Effect;
}

export interface WallpaperComponent {
    wallpaper: Wallpaper;
    color: Color;
}

export interface WallpaperTransition {
    name: Transition;
    delay: TypeMilliseconds;
    offset: TypeMilliseconds;
    duration: TypeMilliseconds;
}
